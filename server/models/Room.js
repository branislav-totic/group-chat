const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, require },
  desc: String,
  password: String,
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
