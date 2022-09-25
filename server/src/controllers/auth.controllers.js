const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const createError = require("../utils/createError");

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const { username, firstName, lastName, email, gender, age } = req.body;
    const newUser = new User({
      username,
      firstName,
      lastName,
      email,
      gender,
      age,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User has been registered successfully",
      newUser,
    });
  } catch (error) {
    next(createError);
  }
};

module.exports = { register };
