const express = require("express");
const threadController = require("../controllers/thread-controller");

const threadRouter = express.Router();

threadRouter.get("/:threadId", threadController.getThreadInfoById);

module.exports = threadRouter;
