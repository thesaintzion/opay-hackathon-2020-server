const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    message: { type: String },
    email_sent: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);