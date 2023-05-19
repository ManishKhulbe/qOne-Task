const constants = {
  state: ["ACTIVE", "NOT_ACTIVE"],

  MESSAGES: {
    UNAUTHORIZED_ACCESS: "Unauthorized access",
    INTERNAL_SERVER_ERROR: "Internal server error",
    validationError: "Validation error",
    USER_NOT_FOUND: "User not found",
    PASSWORD_NOT_MATCH: "Password not match",
    ITEM_NOT_ADDED: "Unable to add item at this time",
    ITEM_ALREADY_EXISTS: "Item already exists",
    ITEM_NOT_FOUND: "Items Not Found",
    ITEM_NAME_ALREADY_EXISTS: "Item name already exists",
    ITEM_NOT_EDITED: "Unable to edit item at this time",
    UNABLE_TO_DELETE_ITEM: "Unable to delete item at this time",
    UNAUTHORIZED_ACCESS: "Unauthorized access",
  },

  CONFIG: {
    PORT: 3001,
    MONGO_URI:
      "mongodb+srv://root:toor@cluster0.bxumy.mongodb.net/qOne?retryWrites=true&w=majority",
    DB_NAME: "qOne",
    JWT_SECRET: "secret12345678hudhuhf",
  },
};

module.exports = {
  constants,
};
