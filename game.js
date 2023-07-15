// game.js
const express = require("express");
const app = express();
const path = require("path");

let clickCount = 0;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/click", (req, res) => {
  clickCount++;
  res.send(`Click count: ${clickCount}`);
});

app.listen(3000, () => {
  console.log("Game server is running on http://localhost:3000");
});
