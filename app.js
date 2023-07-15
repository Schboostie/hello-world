const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const port = 3000;
const quotesFilePath = path.join(__dirname, "quotes.json");

app.get("/quotes", (req, res) => {
  fs.readFile(quotesFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading quotes file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const quotes = JSON.parse(data);
    res.json(quotes);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
