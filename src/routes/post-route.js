const express = require("express");
const postController = require("../controllers/post-controller");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");

const postRouter = express.Router();

postRouter.post(
  "/",
  authenticate,
  upload.single("postImage"),
  postController.createPost
);

postRouter.patch(
  "/",
  authenticate,
  upload.single("postImage"),
  postController.updatePost
);
postRouter.delete("/:postId", authenticate, postController.deletePost);

postRouter.get("/:postId", authenticate, postController.getAllPost);
module.exports = postRouter;
