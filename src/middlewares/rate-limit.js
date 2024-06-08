const { rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  message: { message: "Too many requests in a given period" },
});

module.exports = limiter;
