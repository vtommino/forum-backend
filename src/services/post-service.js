const prisma = require("../models/prisma");

const postService = {};

postService.createPost = (data) =>
  prisma.post.create({
    data,
  });

postService.createPostImage = (data) =>
  prisma.postimage.create({
    data,
  });

postService.updatePost = (data, id) =>
  prisma.post.update({
    where: { id },
    data,
  });

postService.findPostimageByPostId = (postId) =>
  prisma.postimage.findFirst({
    where: { postId },
  });

postService.updatePostImage = (data, id) =>
  prisma.postimage.update({
    where: { id },
    data,
  });

postService.deletePost = (id) =>
  prisma.post.delete({
    where: { id },
  });

postService.deletePostImage = (postId) =>
  prisma.postimage.deleteMany({ where: { postId } });

postService.findPostImageByPostId = (postId) =>
  prisma.postimage.findFirst({
    where: { postId },
  });

postService.getPostById = (id) =>
  prisma.post.findUnique({
    where: { id },
    include: {
      comment: { include: { user: true } },
      user: { select: { userName: true, coverImage: true } },
      thread: { include: { forum: true } },
    },
  });

module.exports = postService;
