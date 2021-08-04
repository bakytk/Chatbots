const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({

    user_agent: {
        type: String,
    },
    content: {
        type: String,
    },
    timestamp: {
        type: String
    },
    participant_id: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports.msgSchema = msgSchema;
