const prisma = require("../models/prisma");

const threadService = {};

threadService.getInfoById = (threadIdNo) =>
  prisma.thread.findUnique({
    where: { id: threadIdNo },
    include: { forum: true, post: { include: { user: true, comment: true } } },
  });

module.exports = threadService;
