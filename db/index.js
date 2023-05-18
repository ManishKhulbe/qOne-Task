const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI || "mongodb://localhost:27017";

const dbName = process.env.DB_NAME || "qOne";

const client = new MongoClient(url);
const BaseDao = require("./baseDao");
//connect to mongodb


async function connectToMongo(){
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error(error);
    return null;
  }
};

async function createModal(collectionName){
  try {
    const db = await connectToMongo();
    const modal =  new BaseDao(collectionName, db);
    // let user = await modal.find().toArray();
    // console.log("🚀 ~ file: index.js:27 ~ createModal ~ modal:", user)
    return modal;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports={
    connectToMongo,
    createModal
}

