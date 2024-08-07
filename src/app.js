require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const errorMiddleware = require("./middlewares/error");
const notFoundMiddleware = require("./middlewares/not-found");
const limiter = require("./middlewares/rate-limit");
const authRouter = require("./routes/auth-route");
const forumRouter = require("./routes/forum-route");
const threadRouter = require("./routes/thread-route");
const postRouter = require("./routes/post-route");
const adminRouter = require("./routes/admin-route");
const commentRouter = require("./routes/comment-route");

const app = express();

app.use(cors());
//app.use(cors({origin: ['https://google.com']})) กำหนดคนให้เรียกเข้ามาได้ ถ้าไม่ได้ใส่คือทุกคนเข้าเซอร์เวอร์ได้
app.use(morgan("combined"));
app.use(limiter);
app.use(express.json());

app.use("/auth", authRouter);
app.use("/forum", forumRouter);
app.use("/thread", threadRouter);
app.use("/post", postRouter);
app.use("/admin", adminRouter);
app.use("/comment", commentRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8889;
app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
