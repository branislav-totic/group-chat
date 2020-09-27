const express = require('express');
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const routes = require('./routes');
const Chat = require("./models/Chat");
const db = require("./db");

require('dotenv').config();

const port = process.env.BACKEND_PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(routes);


const server = http.createServer(app);

const socket = socketIo(server);

//setup event listener
socket.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  //Someone is typing
  socket.on("typing", data => {
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });

  //when soemone stops typing
  socket.on("stopTyping", () => {
    socket.broadcast.emit("notifyStopTyping");
  });

  socket.on("chat message", function(msg) {
    console.log("message: " + msg);

    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit("received", { message: msg });

    //save chat to the database
    db.then(dbase => {
      console.log("connected correctly to the server");
      let chatMessage = new Chat({ message: msg, sender: "Anonymous" });

      chatMessage.save();
    });
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
