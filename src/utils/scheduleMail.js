const cron = require('node-cron');
const Email = require('../models/email');
const sendEmail = require('/Users/mac/AutoMail/src/utils/sendEmail.js');


// Schedule: runs every minute
const startScheduler = () => {
  cron.schedule('* * * * *', async () => {
    const now = new Date(); // current time
    console.log('Checking for scheduled emails at', now.toISOString());

    try {
      // 1. Fetch all pending emails
      const pendingEmails = await Email.find({ status: 'pending' });

      for (const email of pendingEmails) {
        // 2. Skip emails that are still in the future
        if (email.scheduledAt > now) {
          console.log(
            `Skipping email to ${email.recipient}, scheduled for ${email.scheduledAt.toISOString()}`
          );
          continue;
        }

        try {
          // 3. Send the email
          await sendEmail(email.recipient, email.subject, email.body);

          // 4. Mark as sent
          email.status = 'sent';
          email.sentAt = new Date();
          await email.save();

          console.log(`Scheduled email sent to ${email.recipient}`);
        } catch (err) {
          console.error(`Failed to send email to ${email.recipient}:`, err);

          // Optional: mark as failed
          email.status = 'failed';
          await email.save();
        }
      }
    } catch (error) {
      console.error('Error in email scheduler:', error);
    }
  });
};

module.exports = startScheduler;
