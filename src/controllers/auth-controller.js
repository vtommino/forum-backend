const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const createError = require("../utils/create-error");

const authController = {};

authController.register = async (req, res, next) => {
  //req.input password
  try {
    const data = req.input;
    const existUser = await userService.findUserByEmailOrMobile(
      data.email || data.mobile
    );

    if (existUser) {
      createError({
        message: "This email or mobile has already been used.",
        statusCode: 400,
      });
    }

    data.password = await hashService.hash(data.password);
    await userService.createUser(data);
    res.status(201).json({ message: "Forum user created" });
  } catch (err) {
    next(err);
  }
};

module.exports = authController;
