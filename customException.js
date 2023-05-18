var Exception = require("./model/Exception");

const constants = {
  MESSAGES: {
    UNAUTHORIZED_ACCESS: "Unauthorized access",
    INTERNAL_SERVER_ERROR: "Internal server error",
    validationError: "Validation error",
    USER_NOT_FOUND : "User not found",
    PASSWORD_NOT_MATCH : "Password not match",
    ITEM_NOT_ADDED : 'Unable to add item at this time',
    ITEM_ALREADY_EXISTS:'Item already exists',
    ITEM_NOT_FOUND:"Items Not Found",
    ITEM_NAME_ALREADY_EXISTS:"Item name already exists",
    ITEM_NOT_EDITED:"Unable to edit item at this time",
    UNABLE_TO_DELETE_ITEM:"Unable to delete item at this time"

  },
};

module.exports = {
  internalServerErr: function (err) {
    return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
  },
  itemNotEdited: function () {
    return new Exception(2, constants.MESSAGES.ITEM_NOT_EDITED);
  },
  getCustomErrorException: function (err) {
   return new Exception(3, constants.MESSAGES.validationError, err);
  },
  userNotFound: function () {
    return new Exception(4, constants.MESSAGES.USER_NOT_FOUND);
  },
  passwordNotMatch: function () {
    return new Exception(5, constants.MESSAGES.PASSWORD_NOT_MATCH);
  },
  itemNotAdded :function () {
    return new Exception(6, constants.MESSAGES.ITEM_NOT_ADDED);
  },
  itemAlreadyExists : function () {
    return new Exception(7, constants.MESSAGES.ITEM_ALREADY_EXISTS);
  },
  noItemFound : function () {
    return new Exception(8, constants.MESSAGES.ITEM_NOT_FOUND);
  },
  itemNameAlreadyExists : function () {
    return new Exception(9, constants.MESSAGES.ITEM_NAME_ALREADY_EXISTS);
  },
  unableToDeleteItem : function () {
    return new Exception(10, constants.MESSAGES.UNABLE_TO_DELETE_ITEM);
  }
};
