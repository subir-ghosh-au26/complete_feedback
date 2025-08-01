const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    trainee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainee',
        required: true,
    },
    courseContentRating: { type: Number, min: 1, max: 5, required: true },
    facultyRating: { type: Number, min: 1, max: 5, required: true },
    messRating: { type: Number, min: 1, max: 5, required: true },
    suggestions: { type: String, trim: true },
    submissionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);