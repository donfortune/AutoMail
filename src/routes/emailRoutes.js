const emailController = require('../controllers/emailController');
const express = require('express');
const router = express.Router();

router.post('/send-later', emailController.scheduleEmail);
router.post('/send-now', emailController.sendNow);
router.get('/emails', emailController.getAllEmails);


module.exports = router;