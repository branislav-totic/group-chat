const mongoose = require('mongoose');

const roomsMembersSchema = new mongoose.Schema({
  roomID: String,
  userID: String,
});

const RoomsMembers = mongoose.model('Rooms_Members', roomsMembersSchema);

module.exports = RoomsMembers;
