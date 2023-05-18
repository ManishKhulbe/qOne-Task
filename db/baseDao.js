class BaseDao {
  modal = null;
  constructor(collectionName, db) {
    this.modal = db.collection(collectionName);
  }

  find() {
    return this.modal.find().toArray();
  }
  findOne(params) {
    return this.modal.findOne(params)
  }
  save(object) {
    return this.modal.insertOne(object);
  }
  insertMany(array) {
    return this.modal.insertMany(array);
  }

  findOneAndUpdate(query, update) {
    return this.modal.findOneAndUpdate(query, update);
  }

  findOneAndDelete(query) {
    return this.modal.findOneAndDelete(query);
  }
}

module.exports = BaseDao;
