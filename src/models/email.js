const mongoose = require('mongoose');
const schema = mongoose.Schema;

const emailSchema = new schema({
    recipient: {
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
        
    }, 
},{ timestamps: true });

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
