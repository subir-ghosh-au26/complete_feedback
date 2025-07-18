const mongoose = require('mongoose');

const TraineeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true, // Each mobile number must be unique
    },
    hasSubmittedFeedback: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Trainee', TraineeSchema);