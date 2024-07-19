const prisma = require("../models/prisma");

const threadService = {};

threadService.getInfoById = (threadIdNo) =>
  prisma.post.findMany({
    where: { threadId: threadIdNo },
    include: { thread: true, user: true },
  });

module.exports = threadService;
