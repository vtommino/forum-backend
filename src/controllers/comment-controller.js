const commentService = require("../services/comment-service");
const uploadService = require("../services/upload-service");

const commentController = {};

commentController.createComment = async (req, res, next) => {
  try {
    const data = req.body;
    data.userId = req.user.id;
    data.postId = +data.postId;

    if (req?.file) {
      const cloudinaryUrl = await uploadService.upload(req.file?.path);
      data.commentImage = cloudinaryUrl;
    }

    const result = await commentService.createComment(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = commentController;
