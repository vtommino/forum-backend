const threadService = require("../services/thread-service");

const threadController = {};

threadController.getThreadInfoById = async (req, res, next) => {
  try {
    const data = await threadService.getInfoById(+req.params.threadId);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = threadController;
