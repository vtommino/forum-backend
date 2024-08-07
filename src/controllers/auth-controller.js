const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const jwtService = require("../services/jwt-service");
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
        field: "emailOrMobile",
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

authController.login = async (req, res, next) => {
  try {
    const existUser = await userService.findUserByEmailOrMobile(
      req.input.emailOrMobile
    );
    if (!existUser) {
      createError({
        message: "Invalid credentials.",
        statusCode: 400,
      });
    }
    const isMatch = await hashService.compare(
      req.input.password,
      existUser.password
    );
    if (!isMatch) {
      createError({
        message: "Invalid credentials.",
        statusCode: 400,
      });
    }
    const accessToken = jwtService.sign({ id: existUser.id });
    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};

authController.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};

module.exports = authController;
