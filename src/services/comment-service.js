const prisma = require("../models/prisma");

const commentService = {};

commentService.createComment = (data) => prisma.comment.create({ data });

module.exports = commentService;
