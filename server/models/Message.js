const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	message: String,
	userID: String,
	roomID: String,
	time: String,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
