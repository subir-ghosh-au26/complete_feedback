const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const Papa = require('papaparse');
const xlsx = require('xlsx');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allow requests from our React frontend
app.use(express.json());

const TRAINEES_PATH = path.join(__dirname, 'data', 'trainees.json');
const FEEDBACK_PATH = path.join(__dirname, 'data', 'feedback.csv');

// --- API ROUTES ---

// 1. VALIDATE MOBILE NUMBER
app.post('/api/validate-mobile', (req, res) => {
    const { mobile } = req.body;
    if (!mobile) return res.status(400).json({ success: false, message: 'Mobile number is required.' });

    const trainees = JSON.parse(fs.readFileSync(TRAINEES_PATH, 'utf8'));
    const trainee = trainees.find(t => t.mobile === mobile);
    if (!trainee) return res.json({ success: false, message: 'This mobile number is not registered.' });

    if (fs.existsSync(FEEDBACK_PATH)) {
        const feedbackData = fs.readFileSync(FEEDBACK_PATH, 'utf8');
        const parsedFeedback = Papa.parse(feedbackData, { header: true }).data;
        const existingSubmission = parsedFeedback.find(row => row && row.Mobile === mobile);
        if (existingSubmission) {
            return res.json({ success: false, message: 'Feedback has already been submitted from this number.' });
        }
    }
    res.json({ success: true, name: trainee.name });
});

// 2. SUBMIT FEEDBACK
app.post('/api/submit-feedback', (req, res) => {
    const feedback = req.body;
    if (!feedback.mobile) return res.status(400).json({ success: false, message: 'Submission is missing mobile number.' });

    const headers = 'Name,Mobile,CourseContentRating,FacultyRating,MessRating,OverallExperience,Comments\n';
    const row = `"${feedback.name}","${feedback.mobile}","${feedback.courseContentRating}","${feedback.facultyRating}","${feedback.messRating}","${feedback.overallExperience}","${feedback.comments.replace(/"/g, '""')}"\n`;

    if (!fs.existsSync(FEEDBACK_PATH)) {
        fs.writeFileSync(FEEDBACK_PATH, headers);
    }
    fs.appendFileSync(FEEDBACK_PATH, row);
    res.json({ success: true, message: 'Thank you! Your feedback has been submitted.' });
});

// 3. DOWNLOAD FEEDBACK AS EXCEL
app.get('/admin/download-feedback', (req, res) => {
    if (!fs.existsSync(FEEDBACK_PATH)) {
        return res.status(404).send('No feedback has been submitted yet.');
    }
    const workbook = xlsx.readFile(FEEDBACK_PATH);
    const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    res.setHeader('Content-Disposition', 'attachment; filename="TrainingFeedback.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(excelBuffer);
});

// --- SERVER START ---
app.listen(PORT, () => {
    console.log(`✅ Backend server is running on http://localhost:${PORT}`);
    console.log(`🚀 Admin: Download feedback at http://localhost:${PORT}/admin/download-feedback`);
});