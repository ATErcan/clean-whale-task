const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Invalid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;