const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, require },
  password: { type: String, require },
  email: { type: String, require },
  chatRooms: [{type: mongoose.Schema.Types.ObjectId, ref: 'Room'}],
  lastRoom: {type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
  avatar: { data: Buffer, contentType: String }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
