var Exception = require("./model/Exception");

const constants = {
  MESSAGES: {
    UNAUTHORIZED_ACCESS: "Unauthorized access",
    INTERNAL_SERVER_ERROR: "Internal server error",
    validationError: "Validation error",
  },
};

module.exports = {
  internalServerErr: function (err) {
    return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
  },
  unauthorizeAccess: function () {
    return new Exception(2, constants.MESSAGES.UNAUTHORIZED_ACCESS);
  },
  getCustomErrorException: function (err) {
   return new Exception(3, constants.MESSAGES.validationError, err);
  }
};
