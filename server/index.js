const express = require("express");
const db = require("./src/database/db");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 90, () => {
  db();
  console.log(`Server Running on port ${process.env.PORT}`);
});
