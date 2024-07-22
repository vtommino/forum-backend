const adminService = require("../services/admin-service");

const adminController = {};

adminController.getAllAdminPageInfo = async (req, res, next) => {
  try {
    const forumThreadPostInfo = await adminService.forumThreadPostInfo();
    const userInfo = await adminService.userInfo();
    res.status(200).json({ forumThreadPostInfo, userInfo });
  } catch (err) {
    next(err);
  }
};

adminController.updateUserStatus = async (req, res, next) => {
  try {
    const userStatus = req.body.approveStatus === "APPROVED" ? true : false;
    const userId = +req.body.userId;
    const userInfo = await adminService.updateUserStatus(userId, userStatus);
    res.status(200).json(userInfo);
  } catch (err) {
    next(err);
  }
};
module.exports = adminController;
