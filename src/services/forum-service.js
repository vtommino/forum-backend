const prisma = require("../models/prisma");

const forumService = {};

forumService.readInfo = () =>
  prisma.forum.findMany({ include: { thread: true } });

module.exports = forumService;
