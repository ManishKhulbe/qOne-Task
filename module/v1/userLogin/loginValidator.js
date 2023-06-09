const { Validator } = require("node-input-validator");
const exceptions = require("../../../customException");
const responseHandler = require("../../../responseHandler");

const validateLogIn = async (req, res, next) => {
  try {
    const v = new Validator(req.body, {
      username: "required|string",
      password: "required",
    });

    const matched = await v.check();
    if (!matched) {
      const errors = v.errors;
      validationError(req, res, errors, next);
    }
    next( )
    return;
  } catch (error) {
    next(error);
    return;
  }
};

const validationError = function (req, res, errors, next) {
  if (errors && Object.keys(errors).length > 0) {
    responseHandler.sendError(
      res,
      exceptions.getCustomErrorException(errors),
      req,
      422
    );
    return;
  }
  next();
};

module.exports = {
  validateLogIn,
};
