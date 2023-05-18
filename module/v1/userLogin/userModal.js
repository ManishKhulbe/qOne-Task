const { dbClient } = require("../../../db/index");
const User = dbClient.model('users');
module.exports = { User: User };
