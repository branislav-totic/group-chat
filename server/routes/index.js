const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/user", (req, res) => {
  res.send({ response: "User is up" }).status(200);
});

module.exports = router;