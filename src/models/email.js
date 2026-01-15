const moongose = require('mongoose');
const schema = moongose.Schema;

const emailSchema = new schema({
    receipient: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
    },
    scheduledAt: {
        type: Date,
        required: true,
    },
    sentAt: {
        type: Date,
        default: Date.now,
    },
})

const Email = moongose.model('Email', emailSchema);

module.exports = Email;
