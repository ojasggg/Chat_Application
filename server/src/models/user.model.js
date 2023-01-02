const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
    userType: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    profilePicture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator, { message: "Unique {PATH} is required" });

module.exports = mongoose.model("User", UserSchema);
