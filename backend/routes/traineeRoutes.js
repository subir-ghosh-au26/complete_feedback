const express = require('express');
const router = express.Router();
const { validateTrainee } = require('../controllers/traineeController');

router.post('/validate', validateTrainee);

module.exports = router;