const prisma = require("../models/prisma");

const adminService = {};

adminService.forumThreadPostInfo = () =>
  prisma.forum.findMany({
    include: { thread: { include: { post: { include: { user: true } } } } },
  });

adminService.userInfo = () =>
  prisma.user.findMany({ where: { isAdmin: false } });

adminService.updateUserStatus = (id, userStatus) =>
  prisma.user.update({ where: { id }, data: { isApproved: userStatus } });
module.exports = adminService;
