console.log("hello world");
const express = require("express");

const app = express();
console.log(app);
app.listen();
/*
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  fs.readFile("quotes.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading quotes file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const quotes = JSON.parse(data);
    res.send(quotes);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

*/
