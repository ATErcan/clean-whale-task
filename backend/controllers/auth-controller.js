const { createUser } = require("../services/user-service");
const { createToken } = require("../utils/auth-utils");

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
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
    throw error;
  }
}

module.exports = { signup };