const express = require("express");
const { chats } = require("./data/data");

//you can use the express variable to create an instance of the Express application and define routes, middleware, and more for your web application.
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req);
});

// create a another endpoint

app.listen(5000, () => {
  console.log("server Started on PORT 5000");
});
