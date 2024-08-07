const prisma = require("../models/prisma");

const userService = {};

userService.createUser = (data) => prisma.user.create({ data });
//userService.createUser = (input) => prisma.user.create({ data: input });
userService.findUserByEmailOrMobile = (emailOrMobile) =>
  prisma.user.findFirst({
    where: {
      OR: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    },
  });

userService.findUserById = (userId) =>
  prisma.user.findUnique({ where: { id: userId } });

module.exports = userService;
