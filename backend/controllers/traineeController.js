const Trainee = require('../models/Trainee');

// @desc    Validate a trainee's mobile number
// @route   POST /api/trainees/validate
// @access  Public
exports.validateTrainee = async (req, res) => {
    try {
        const { mobile } = req.body;
        if (!mobile) {
            return res.status(400).json({ message: 'Mobile number is required' });
        }

        const trainee = await Trainee.findOne({ mobile });

        if (!trainee) {
            return res.status(404).json({ message: 'Trainee with this mobile number not found.' });
        }

        if (trainee.hasSubmittedFeedback) {
            return res.status(403).json({ message: 'You have already submitted feedback.' });
        }

        // If valid and hasn't submitted, send back trainee info
        res.status(200).json({
            message: 'Validation successful',
            trainee: { id: trainee._id, name: trainee.name }
        });

    } catch (error) {
        console.error("Validation error:", error);
        res.status(500).json({ message: 'Server error during validation' });
    }
};