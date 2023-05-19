const { MongoClient } = require("mongodb");

const constant = require("../constant");
const {CONFIG}= constant.constants
const url =CONFIG.MONGO_URI || "mongodb://localhost:27017";

const dbName = CONFIG.DB_NAME || "qOne";

const client = new MongoClient(url);
const BaseDao = require("./baseDao");
//connect to mongodb


class dbConnection{
  constructor(){}
  db=null;
  createModal=null;

 static async connect(){
    try {
      await client.connect();
      console.log("Connected to MongoDB");
      this.db = client.db(dbName);
      return this.db;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static createModal(collectionName){
    try {
      let modal =  new BaseDao(collectionName, this.db);
      return modal;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}


module.exports={
  dbConnection
}

