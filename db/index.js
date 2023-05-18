const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI || "mongodb://localhost:27017";

const dbName = process.env.DB_NAME || "qOne";

const client = new MongoClient(url, { useUnifiedTopology: true });
const BaseDao = require("./baseDao");
//connect to mongodb
module.exports.connectToMongo = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports.createModal = async (collectionName) => {
  try {
    const db = await this.connectToMongo();
    const modal =  new BaseDao(collectionName, db);
    return modal;
  } catch (error) {
    console.error(error);
    return null;
  }
}

