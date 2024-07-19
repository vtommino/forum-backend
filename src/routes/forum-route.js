const express = require("express");
const forumController = require("../controllers/forum-controller");

const forumRouter = express.Router();

forumRouter.get("/", forumController.getForumInfo);

module.exports = forumRouter;
