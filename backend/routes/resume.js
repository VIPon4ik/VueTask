const express = require('express');
const router = express.Router();
const ctrlResume = require('../controller/resumes');

router.post('/resumes', ctrlResume.create)

module.exports = router;