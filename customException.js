var Exception = require("./model/Exception");

const {constants} = require('./constant')
const {MESSAGES} = constants

module.exports = {
  internalServerErr: function (err) {
    return new Exception(1, MESSAGES.INTERNAL_SERVER_ERROR, err);
  },
  itemNotEdited: function () {
    return new Exception(2, MESSAGES.ITEM_NOT_EDITED);
  },
  getCustomErrorException: function (err) {
   return new Exception(3, MESSAGES.validationError, err);
  },
  userNotFound: function () {
    return new Exception(4, MESSAGES.USER_NOT_FOUND);
  },
  passwordNotMatch: function () {
    return new Exception(5, MESSAGES.PASSWORD_NOT_MATCH);
  },
  itemNotAdded :function () {
    return new Exception(6, MESSAGES.ITEM_NOT_ADDED);
  },
  itemAlreadyExists : function () {
    return new Exception(7, MESSAGES.ITEM_ALREADY_EXISTS);
  },
  noItemFound : function () {
    return new Exception(8, MESSAGES.ITEM_NOT_FOUND);
  },
  itemNameAlreadyExists : function () {
    return new Exception(9, MESSAGES.ITEM_NAME_ALREADY_EXISTS);
  },
  unableToDeleteItem : function () {
    return new Exception(10, MESSAGES.UNABLE_TO_DELETE_ITEM);
  },
  unauthorizedUser : function () {
    return new Exception(11, MESSAGES.UNAUTHORIZED_ACCESS);
  }
};
