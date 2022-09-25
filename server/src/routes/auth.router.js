const router = require("express").Router();
const { register } = require("../controllers/auth.controllers");

// Register User
router.post("/register", register);
