const forumService = require("../services/forum-service");

const forumController = {};

forumController.getForumInfo = async (req, res, next) => {
  try {
    const data = await forumService.readInfo();

    res.status(200).json({ forum: data });
  } catch (err) {
    next(err);
  }
};

module.exports = forumController;
