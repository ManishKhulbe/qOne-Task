const { dbConnection } = require("../../../db");
const User = dbConnection.createModal('user');
module.exports = User;

