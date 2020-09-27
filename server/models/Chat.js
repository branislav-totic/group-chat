const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    message: String,
    sender: String,
    chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
