class BaseDao {
  modal = null;
  constructor(collectionName, db) {
    this.modal = db.collection(collectionName);
  }

  find() {
    return this.modal.find();
  }
}

module.exports = BaseDao;
