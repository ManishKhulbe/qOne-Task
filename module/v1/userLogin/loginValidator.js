const { Validator } = require("node-input-validator");
const exceptions = require("../../../customException");

const validateLogIn = async (req, res, next) => {
    const v = new Validator(req.body, {
    userame: "required|string",
    password: "required",
  });

  const matched = await v.check();
  if (!matched) {
    const errors = v.errors;
    console.log("Validation errors:", errors);
    next(exceptions.getCustomErrorException(errors));
  }
  next();
};

module.exports = {
  validateLogIn,
};
