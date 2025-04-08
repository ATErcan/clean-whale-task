const User = require("../models/User");
const { createUser } = require("../services/user-service");
const { createToken } = require("../utils/auth-utils");
const { createValidationError, createError } = require("../utils/errors");

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if(typeof email === "undefined" || typeof password === "undefined") {
      throw createError("Email and password are required.", 400);
    }

    const user = await createUser({ email, password });
    const token = createToken({
      _id: user._id
    });
    const userData = user.toObject();
    delete userData.password;

    res.status(201).json({
      jwt: {
        token
      },
      user: userData
    });
  } catch (error) {
    const validationError = createValidationError(error);
    return next(validationError || error);
  }
}

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw createError("Email and password are required.", 400);
    }

    const user = await User.findOne({ email });
    if(!user) {
      throw createError("Invalid email or password", 401);
    }
  } catch (error) {
    const validationError = createValidationError(error);
    return next(validationError || error);
  }
}

module.exports = { signup, login };