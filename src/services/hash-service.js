const bcrypt = require("bcryptjs");

const hashService = {};

hashService.hash = (plainText) => {
  return bcrypt.hash(plainText, 12);
};

module.exports = hashService;
