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
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "Invalid Credentials"));
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(404, "Invalid Credentials"));

    const token = jsonwebtoken.sign(
      { id: user._id, userType: user.userType },
      process.env.SECRET_KEY
    );
    const { password, userType, ...others } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ success: true, message: "You are logged in", ...others });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
