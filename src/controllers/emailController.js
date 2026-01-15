const email = require('../models/email');
const sendEmail = require('../utils/sendEmail');


exports.sendEmail = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: 'Request body is missing' });
        }

        const { recipient, subject, body } = req.body; 

        await sendEmail(recipient, subject, body); // 
        console.log(`Email sent to ${recipient}`);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email send failed:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }

}