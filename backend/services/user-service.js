const argon2 = require("argon2");
const zxcvbn = require("zxcvbn");

const User = require("../models/User");
const { createError } = require("../utils/errors");
const { createToken } = require("../utils/auth-utils");

const validatePassword = (password) => {
  const result = zxcvbn(password);

  if(result.score < 3) {
    throw createError("Password is too weak. Use a stronger password.", 400);
  }
}

const hashPassword = async (userData) => {
  const user = new User(userData);

  try {
    const hashedPwd = await argon2.hash(user.password, {
      type: argon2.argon2id
    });
    user.password = hashedPwd;
    return user;
  } catch (error) {
    throw createError("Failed to hash the password", 500);
  }
}

const createUser = async (userData) => {
  validatePassword(userData.password);

  try {
    const user = await hashPassword(userData);
    await user.save();

    return user;
  } catch (error) {
    // duplicate email
    if(error.code == 11000) {
      throw createError("Email already in use", 409);
    }

    // Other errors
    throw error;
  }
}

const checkUser = async (user, password) => {
  try {
    const verified = await argon2.verify(user.password, password);

    if(verified) {
      const token = createToken({
        _id: user._id
      });
      return token;
    } else {
      throw createError("Invalid email or password", 401);
    }
  } catch (error) {
    if(error.statusCode === 401) {
      throw error;
    }
    throw createError("Failed to verify password (server error)", 500);
  }
}

module.exports = { createUser, checkUser };