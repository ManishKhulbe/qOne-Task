class BaseDao{
modal = null;
    constructor(collectionName , db){
        this.model = db.collection(collectionName);
    }

    find(){
        return this.model.find()
    }

}

module.exports = BaseDao;