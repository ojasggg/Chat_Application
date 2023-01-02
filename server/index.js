require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const db = require("./src/database/db");
const conversationRoute = require("./src/routes/conversation.router");
const authenticationRoute = require("./src/routes/auth.router");
const userRoute = require("./src/routes/user.router");
const messageRoute = require("./src/routes/message.router");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);

// Middle ware
app.use("/api/conversation", conversationRoute);
app.use("/api/auth", authenticationRoute);
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!";

  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 90, () => {
  db();
  console.log(`Server Running on port ${process.env.PORT}`);
});
