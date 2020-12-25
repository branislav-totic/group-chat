const express = require("express");
const db = require("../db");
const Message = require("../models/Message");
const Room = require("../models/Room");
const User = require("../models/User");
const RoomsMembers = require("../models/RoomsMembers");

const router = express.Router();

router.route("/").get((req, res, next) => {
  // res.setHeader("Content-Type", "application/json");
  // res.statusCode = 200;

  db.then(db => {
    Message.find({ message: "Anonymous" }).then(chat => {
      res.json(chat);
    });
  });
});

// Login
router.route("/login").get(async (req, res) => {
  try {
    const { email, password } = req.body;
    
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email" });

    user = await User.findOne({ password });
    if (!user) return res.status(400).json({ error: "Invalid password" });

    user = await User.findOne({  email, password }, { password: false, __v: false });
    res.status(200).json(user);

  } catch (err) {
    res.status(500).json(err)
  };
});

// Create user
router.route("/user").post((req, res) => {
  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt);
  new User(req.body)
  .save()
  .then(data => {
    res.status(201);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});
 
// Update user
router.route("/user:id").post((req, res, next) => {
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

// Get All Messages in Room
router.route("/message").get((req, res) => {
  const { roomID } = req.body
  Message.find({ roomID }, { _id: false, __v: false })
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// Add new Message
router.route("/message").post((req, res) => {
  new Message(req.body)
  .save()
  .then(data => {
    res.sendStatus(201);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


// Create new Room
router.route("/room").post((req, res) => {
  new Room(req.body)
  .save()
  .then(data => {
    res.sendStatus(201);  
  })
  .catch(err => {
    res.status(500).json(err);
  });
});


// Set User to Room
router.route("/rooms").post((req, res) => {
  new RoomsMembers(req.body)
  .save()
  .then(data => {
    res.sendStatus(201);  
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

// Get All Users in Room
router.route("/rooms").get(async (req, res) => {
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

// Get all Rooms for User
router.route("/rooms-members").get(async (req, res) => {
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
