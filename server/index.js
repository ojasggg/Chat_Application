require("dotenv").config();
const express = require("express");
const db = require("./src/database/db");
const conversationRoute = require("./src/routes/conversation.router");

const app = express();

app.use(express.json());

// Middle ware
app.use("/api/conversation", conversationRoute);

app.listen(process.env.PORT || 90, () => {
  db();
  console.log(`Server Running on port ${process.env.PORT}`);
});
