const User = require("../models/user.model");
const createError = require("../utils/createError");

// Get single User
const getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params._id });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    const { password, userType, ...others } = user._doc;
    return res
      .status(200)
      .json({ success: true, message: "User Found.", ...others });
  } catch (error) {
    next(error);
  }
};

// Get all UserSchema
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res
      .status(200)
      .json({ success: true, message: "All Users data.", users });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSingleUser, getUsers };
