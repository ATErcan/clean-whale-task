const argon2 = require("argon2");
const zxcvbn = require("zxcvbn");

const User = require("../models/User");

const validatePassword = (password) => {
  const result = zxcvbn(password);

  if(result.score < 3) {
    throw {
      message: "Password is too weak. Use a stronger password.",
      statusCode: 400,
    };
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
    throw {
      message: "Failed to hash the password",
      statusCode: 500
    }
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
      throw {
        message: "Email already in use",
        statusCode: 409 // Conflict
      }
    }

    // Other errors
    throw error;
  }
}

module.exports = { createUser };