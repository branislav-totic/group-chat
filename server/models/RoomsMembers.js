const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomsMembersSchema = Schema({
  roomID: String,
  userID: String,
});

const RoomsMembers = mongoose.model('RoomsMembers', roomsMembersSchema);

module.exports = RoomsMembers;
