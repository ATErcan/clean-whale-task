const { createUser } = require("../services/user-service");
const { createToken } = require("../utils/auth-utils");

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await createUser({ email, password });
    const token = createToken({
      _id: user._id
    })

  } catch (error) {
    
  }
}