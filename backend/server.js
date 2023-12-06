const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

//you can use the express variable to create an instance of the Express application and define routes, middleware, and more for your web application.
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is Running successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);

  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

// create a another endpoint

app.listen(5000, () => {
  console.log(`server Started on PORT ${PORT}`);
});
