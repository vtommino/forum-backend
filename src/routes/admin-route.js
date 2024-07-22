const express = require("express");
const adminController = require("../controllers/admin-controller");

const adminRouter = express.Router();
adminRouter.get("/", adminController.getAllAdminPageInfo);
adminRouter.patch("/update-user", adminController.updateUserStatus);
module.exports = adminRouter;
