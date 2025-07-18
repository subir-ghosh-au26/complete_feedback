const express = require('express');
const router = express.Router();
const { submitFeedback, exportFeedback } = require('../controllers/feedbackController');
const { isAdmin } = require('../middleware/authMiddleware');

router.post('/submit', submitFeedback);
router.get('/export', isAdmin, exportFeedback);

module.exports = router;