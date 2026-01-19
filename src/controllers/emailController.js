
// const Email = require('../models/email');

// exports.scheduleEmail = async (req, res) => {
//   try {
//     const { recipient, subject, body, scheduledAt } = req.body;

//     if (!recipient || !subject || !body || !scheduledAt) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     // Convert scheduledAt to JS Date
//     const scheduledDate = new Date(scheduledAt);

//     // Save to DB as pending
//     const email = await Email.create({
//       recipient,
//       subject,
//       body,
//       scheduledAt: scheduledDate,
//       status: 'pending'
//     });

//     res.status(201).json({
//       message: 'Email scheduled successfully',
//       email
//     });
//   } catch (err) {
//     console.error('Failed to schedule email:', err);
//     res.status(500).json({ message: 'Failed to schedule email' });
//   }
// };



// exports.getAllEmails = async (req, res) => {
//     try {
//         const emails = await email.find() 
//         if (emails.length === 0) {
//             return res.status(404).json({ message: 'No emails found' });
//         }
//         res.status(200).json(emails);
//     } catch (error) {
//         console.error('Error fetching emails:', error);
//         res.status(500).json({ message: 'Failed to fetch emails' });
//     }
// }


const Email = require('../models/email');
const sendEmail = require('../utils/sendEmail');

// POST /api/email/schedule
exports.scheduleEmail = async (req, res) => {
  try {
    const { recipient, subject, body, scheduledAt } = req.body;

    if (!recipient || !subject || !body || !scheduledAt) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const scheduledDate = new Date(scheduledAt);

    // Validate scheduled date
    if (isNaN(scheduledDate.getTime())) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    if (scheduledDate <= new Date()) {
      return res.status(400).json({ message: 'Scheduled time must be in the future' });
    }

    const email = await Email.create({
      recipient,
      subject,
      body,
      scheduledAt: scheduledDate,
      status: 'pending',
    });

    console.log('Email scheduled for:', scheduledDate.toISOString());

    res.status(201).json({
      message: 'Email scheduled successfully',
      email,
    });
  } catch (err) {
    console.error('Failed to schedule email:', err);
    res.status(500).json({ message: 'Failed to schedule email' });
  }
};

exports.sendNow = async (req, res) => {
    try {
        const { recipient, subject, body } = req.body;

        if (!recipient || !subject || !body) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Send email immediately
        await sendEmail(recipient, subject, body);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email now:', error);
        res.status(500).json({ message: 'Failed to send email now' });
    }
}

exports.getAllEmails = async (req, res) => {
    try {
        const emails = await Email.find() 
        if (emails.length === 0) {
            return res.status(404).json({ message: 'No emails found' });
        }
        res.status(200).json(emails);
    } catch (error) {
        console.error('Error fetching emails:', error);
        res.status(500).json({ message: 'Failed to fetch emails' });
    }
}