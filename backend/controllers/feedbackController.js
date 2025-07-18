const Feedback = require('../models/Feedback');
const Trainee = require('../models/Trainee');
const { Parser } = require('json2csv');

// @desc    Submit new feedback
// @route   POST /api/feedback/submit
// @access  Public (but logically after validation)
exports.submitFeedback = async (req, res) => {
    try {
        const { traineeId, courseContentRating, facultyRating, messRating, suggestions } = req.body;

        // 1. Check if trainee exists and hasn't submitted yet (double-check)
        const trainee = await Trainee.findById(traineeId);
        if (!trainee || trainee.hasSubmittedFeedback) {
            return res.status(403).json({ message: 'Invalid request or feedback already submitted.' });
        }

        // 2. Create and save new feedback
        const newFeedback = new Feedback({
            trainee: traineeId,
            courseContentRating,
            facultyRating,
            messRating,
            suggestions,
        });
        await newFeedback.save();

        // 3. Mark the trainee as having submitted feedback
        trainee.hasSubmittedFeedback = true;
        await trainee.save();

        res.status(201).json({ message: 'Feedback submitted successfully. Thank you!' });

    } catch (error) {
        console.error("Feedback submission error:", error);
        res.status(500).json({ message: 'Server error during feedback submission' });
    }
};

// @desc    Export all feedback to CSV
// @route   GET /api/feedback/export
// @access  Public (in a real app, this should be protected/admin-only)
exports.exportFeedback = async (req, res) => {
    try {
        // Fetch all feedback and populate trainee details (name, mobile)
        const allFeedback = await Feedback.find({})
            .populate('trainee', 'name mobile')
            .lean(); // .lean() gives us plain JS objects, which is faster

        if (allFeedback.length === 0) {
            return res.status(404).json({ message: "No feedback found to export." });
        }

        // We need to flatten the data for the CSV
        const formattedFeedback = allFeedback.map(fb => ({
            "Trainee Name": fb.trainee.name,
            "Mobile Number": fb.trainee.mobile,
            "Course Content Rating (1-5)": fb.courseContentRating,
            "Faculty Rating (1-5)": fb.facultyRating,
            "Mess Rating (1-5)": fb.messRating,
            "Suggestions": fb.suggestions,
            "Submission Date": new Date(fb.submissionDate).toLocaleString(),
        }));

        // Define the fields/columns for the CSV
        const fields = [
            "Trainee Name",
            "Mobile Number",
            "Course Content Rating (1-5)",
            "Faculty Rating (1-5)",
            "Mess Rating (1-5)",
            "Suggestions",
            "Submission Date"
        ];

        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(formattedFeedback);

        // Set headers to trigger a browser download
        res.header('Content-Type', 'text/csv');
        res.attachment('feedback-export.csv');
        res.status(200).send(csv);

    } catch (error) {
        console.error("Export error:", error);
        res.status(500).json({ message: 'Server error during export' });
    }
};