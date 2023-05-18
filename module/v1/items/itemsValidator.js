
const { Validator } = require("node-input-validator");
const exceptions = require("../../../customException");
const constants = require("../../../constant");
const validateItem = async (req, res, next) => {
    const v = new Validator(req.body, {
    name: "required|string",
    state: `required|in:${constants.state.join(",")}`,
  });

  const matched = await v.check();
  if (!matched) {
    const errors = v.errors;
    console.log("Validation errors:", errors);
    validationError(errors, next)
  }
  next();
};

const  validationError = function (errors, next) {
  if (errors && Object.keys(errors).length > 0) {
    return next(exceptions.getCustomErrorException(errors));
  }
  next();
}

module.exports = {
    validateItem,
};
