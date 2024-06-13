const Joi = require("joi");

exports.registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .strip(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{8,15}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).strip(),
  building: Joi.string().required().valid("A", "B", "C", "D", "E"),
  roomNumber: Joi.string()
    .required()
    .pattern(/^[0-9]{3}$/),
  residentType: Joi.string().required(),
  //   email: Joi.string().default(Joi.ref("emailOrMobile")).forbidden(),
  //   mobile: Joi.string().default(Joi.ref("emailOrMobile")).forbidden(),
  email: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().email({ tlds: false }),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
  mobile: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().pattern(/^[0-9]{10}$/),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
});

// const { value, error } = registerSchema.validate(test);
// console.log(value);
// console.log(error);

// const test = {
//   firstName: "aaaaaa",
//   lastName: "bbbbbb",
//   emailOrMobile: "aaa@gmail.com",
//   password: "1111aaaa",
//   confirmPassword: "1111aaaa",
//   building: "A",
//   roomNumber: "001",
//   residentType: "Co-owner",
// };
// prisma.user.create({
//   data: {
//     firstName: "",
//     lastName: "",
//     emailOrMobile: "",
//     password: "",
//     building: "",
//     roomNumber: "",
//     residentType: "",
//   },
// });
