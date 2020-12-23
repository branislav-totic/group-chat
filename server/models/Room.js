const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = Schema({
  name: { type: String, require },
  desc: String,
  password: String,
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
