const postService = require("../services/post-service");
const uploadService = require("../services/upload-service");

const postController = {};

postController.createPost = async (req, res, next) => {
  try {
    const data = req.body;
    data.userId = req.user.id;
    data.threadId = +data.threadId;

    const result = await postService.createPost(data);
    if (req.file) {
      const cloudinaryUrl = await uploadService.upload(req.file?.path);
      const imageResult = await postService.createPostImage({
        postId: result.id,
        postImageLink: cloudinaryUrl,
      });
      result.imagepost = imageResult;
    }

    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};

postController.updatePost = async (req, res, next) => {
  try {
    const data = req.body;
    const postId = +data.postId;
    delete data.postId;

    console.log(data);
    const result = await postService.updatePost(data, postId);

    if (req.file) {
      const postImage = await postService.findPostImageByPostId(postId);
      console.log(postImage);
      if (postImage) {
        const cloudinaryUrl = await uploadService.upload(req.file?.path);
        const imageResult = await postService.updatePostImage(
          {
            postImageLink: cloudinaryUrl,
          },
          postImage.id
        );
        result.imagepost = imageResult;
      }
    }

    res.status(200).json({ result });
  } catch (err) {
    next(err);
  }
};

postController.deletePost = async (req, res, next) => {
  try {
    console.log(req.params.postId);
    await postService.deletePost(+req.params.postId);
    const response = await postService.findPostImageByPostId(
      +req.params.postId
    );
    if (response) {
      await postService.deletePostImage(+req.params.postId);
    }

    console.log(response);
    res.status(200).json({ message: "The post is deleted." });
  } catch (err) {
    next(err);
  }
};
module.exports = postController;
