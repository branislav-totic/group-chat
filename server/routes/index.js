const express = require("express");
const db = require("../db");
const Chats = require("../models/Chat");

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  db.then(db => {
    let data = Chats.find({ message: "Anonymous" });
    Chats.find({}).then(chat => {
      res.json(chat);
    });
  });
});

module.exports = router;
