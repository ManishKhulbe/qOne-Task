const { dbConnection } = require("../../../db");
const Item = dbConnection.createModal('item');

module.exports = Item;
