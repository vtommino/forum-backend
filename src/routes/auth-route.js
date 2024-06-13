const express = require("express");
const authController = require("../controllers/auth-controller");
const { registerValidator } = require("../middlewares/validator");

const authRouter = express.Router();

authRouter.post("/register", registerValidator, authController.register);
// authRouter.post("/register", (req, res) => {
//   res.send("Hi");
// });

module.exports = authRouter;
