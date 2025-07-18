// backend/server.js
const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config(); // For local development

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration (use your real frontend URL and localhost for testing)
const allowedOrigins = ['https://feedback-form.onrender.com', 'http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));
app.use(express.json());

// --- API ROUTES ---

// 1. VALIDATE MOBILE
app.post('/api/validate-mobile', async (req, res) => {
    const { mobile } = req.body;
    if (!mobile) return res.status(400).json({ success: false, message: 'Mobile number is required.' });

    // Check if trainee is authorized
    const { data: traineeData, error: traineeError } = await supabase
        .from('trainees')
        .select('name')
        .eq('mobile', mobile)
        .single();

    if (traineeError || !traineeData) {
        return res.json({ success: false, message: 'This mobile number is not registered.' });
    }

    // Check if feedback already submitted
    const { data: feedbackData, error: feedbackError } = await supabase
        .from('feedback')
        .select('id')
        .eq('mobile', mobile)
        .single();

    if (feedbackData) {
        return res.json({ success: false, message: 'Feedback has already been submitted from this number.' });
    }

    res.json({ success: true, name: traineeData.name });
});

// 2. SUBMIT FEEDBACK
app.post('/api/submit-feedback', async (req, res) => {
    const { data, error } = await supabase.from('feedback').insert([req.body]);

    if (error) {
        console.error("Supabase Submission Error:", error);
        return res.status(400).json({ success: false, message: error.message });
    }
    res.json({ success: true, message: 'Thank you! Your feedback has been submitted.' });
});

// 3. DOWNLOAD FEEDBACK AS EXCEL
app.get('/admin/download-feedback', async (req, res) => {
    const { data, error } = await supabase.from('feedback').select('*');

    if (error || data.length === 0) {
        return res.status(404).send('No feedback has been submitted yet.');
    }

    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Feedback");

    const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    res.setHeader('Content-Disposition', 'attachment; filename="TrainingFeedback.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(excelBuffer);
});

// --- SERVER START ---
app.listen(PORT, () => {
    console.log(`✅ Backend server (Supabase mode) is running on http://localhost:${PORT}`);
});