const { Validator } = require("node-input-validator");
const exceptions = require("../../../customException");
const responseHandler = require("../../../responseHandler");

const validateItem = async (req, res, next) => {
  const v = new Validator(req.body, {
    name: "required|string",
    state: "required|in:active,inactive",
  });

  const matched = await v.check();
  if (!matched) {
    const errors = v.errors;
    console.log("Validation errors:", errors);
    return validationError(req, res, errors, next);
  }
  next();
};

const validationError = function (req , res, errors, next) {
  if (errors && Object.keys(errors).length > 0) {
    return responseHandler.sendError(res, exceptions.getCustomErrorException(errors) ,req , 422);
  }
  next();
};

module.exports = {
  validateItem,
};
