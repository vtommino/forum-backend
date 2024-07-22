const express = require("express");
const commentController = require("../controllers/comment-controller");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");

const commentRouter = express.Router();

commentRouter.post(
  "/",
  authenticate,
  upload.single("commentImage"),
  commentController.createComment
);

module.exports = commentRouter;
