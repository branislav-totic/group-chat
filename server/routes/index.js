const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../db");

const Message = require("../models/Message");
const Room = require("../models/Room");
const User = require("../models/User");
const RoomsMembers = require("../models/RoomsMembers");

const secret = process.env.TOKEN_CODE || "secret";
const router = express.Router();
const verifyToken = require("../helpers/verifyToken");

router.route("/").get((req, res, next) => {
  // res.setHeader("Content-Type", "application/json");
  // res.statusCode = 200;

  db.then(db => {
    Message.find({ message: "Anonymous" }).then(chat => {
      res.json(chat);
    });
  });
});

////////
// Login
router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  
  User.findOne({ email })
    .then((data) => {
      const isMatch = bcrypt.compareSync(password, data.password);
      if (!isMatch) res.status(500).json("Invalid password");

      const token = jwt.sign({ email }, secret, { expiresIn: '1h' });

      const user = {
        _id: data._id,
        username: data.username,
        email: data.email,
        token
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json("Invalid email or password");
    })
});

//////////////
// Create user
router.route("/user").post(verifyToken, (req, res) => {
  const { email, password, username } = req.body;
  const hashPass = bcrypt.hashSync(password, 10);
  
  new User({
    username,
    email,
    password: hashPass,
  })
  .save()
  .then(data => {
    res.sendStatus(201);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});
 
//////////////
// Update user
router.route("/user:id").post(verifyToken, (req, res) => {
  const user_id = req.params.id;
  
  new User(req.body)
  .save()
  .then(data => {
    res.sendStatus(200);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

///////////////////////////
// Get All Messages in Room
router.route("/message").get(verifyToken, (req, res) => {
  const { roomID } = req.body

  Message.find({ roomID }, { _id: false, __v: false })
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

//////////////////
// Add new Message
router.route("/message").post(verifyToken, (req, res) => {
  new Message(req.body)
  .save()
  .then(data => {
    res.sendStatus(201);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

//////////////////
// Create new Room
router.route("/room").post(verifyToken, (req, res) => {
  new Room(req.body)
  .save()
  .then(data => {
    res.sendStatus(201);  
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

///////////////////
// Set User to Room
router.route("/rooms").post(verifyToken, (req, res) => {
  new RoomsMembers(req.body)
  .save()
  .then(data => {
    res.sendStatus(201);  
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

////////////////////////
// Get All Users in Room
router.route("/rooms").get(verifyToken, async (req, res) => {
  try {
    const { roomID } = req.body;

    let usersID = await RoomsMembers.find({ roomID }, { userID: true, _id: false });
    
    let parsedUsersID = [];
    usersID.map(user=> parsedUsersID.push(user.userID));

    let users = await User.find({}, { password: false, __v: false })
    .where('_id').in(parsedUsersID).exec();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

/////////////////////////
// Get all Rooms for User
router.route("/rooms-members").get(verifyToken, (req, res) => {
  const { userID } = req.body;

  Room.find({ userID })
  .then(data => {
    res.sendStatus(201);  
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;
