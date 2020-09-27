const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require('dotenv').config();

const url = process.env.DB_URL;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connect;
