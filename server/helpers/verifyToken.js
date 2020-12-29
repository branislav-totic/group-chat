const jwt = require("jsonwebtoken");
const User = require("../models/User");
const secret = process.env.TOKEN_CODE || "secret";

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, secret, (err, decoded) => {
      if (!decoded || !decoded.email) res.sendStatus(403);
      const { email, exp } = decoded;
      const user = User.findOne({ email })
      const isExp = new Date().valueOf() <= exp;

      if (!user || isExp) res.sendStatus(403);
    });
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = verifyToken;
