const Item = require("./itemsModal");
const customException = require("../../../customException");
const itemsMapper = require("./itemsMapper");
const { ObjectId } = require("mongodb");

/*
********** Add Item **********
* @params {String} params.name
* @params {String} params.state
* @params {String} params.username
* @params {String} params.userId
* @returns {Object} item
*/

const addItem = async (params) => {
  console.log(params,"params")
  try {
    const itemExists = await Item.findOne({name:params.name})
    if(itemExists){
        throw customException.itemAlreadyExists();
    }
    let userObj={
      name:params.name,
      state:params.state,
      itemAddedByUsername:params.username,
      userId:params.userId,
      createdAt : new Date()
    }
    const addItem = await Item.save(userObj);
    if (!addItem) {
      throw customException.itemNotAdded();
    }
    return itemsMapper.addItemMapping(addItem);
  } catch (err) {
    throw err;
  }
};

/*
********** Get Item **********
* @returns {Object} item
*/

const getItem = async () => {
    try {
      const itemExists = await Item.find({})
      if(!itemExists){
          throw customException.noItemFound();
      }
      return itemsMapper.listItemMapping(itemExists);
    } catch (err) {
      throw err;
    }
  };


/*
********** Get Item By Id **********
* @params {String} params.itemId
* @returns {Object} item
*/

const getItemById= async (params) => {
    try {
      const itemExists = await Item.findOne({_id : new ObjectId(params.itemId)})
      if(!itemExists){
          throw customException.noItemFound();
      }
      return itemsMapper.listItemMapping(itemExists);
    } catch (err) {
      throw err;
    }
  };

/*  
********** Edit Item **********
* @params {String} params.itemId
* @params {String} params.name
* @params {String} params.state
* @returns {Object} item
*/

const editItem= async (params)=>{
  try {
    const isItemExists = await Item.findOne({_id : new ObjectId(params.itemId)})
    if(!isItemExists){
        throw customException.noItemFound();
    }
    const checkUniqueName = await Item.findOne({name:params.name ,  
      _id: { $ne: new ObjectId(params.itemId) }})
    if(checkUniqueName){
        throw customException.itemNameAlreadyExists();
    }
    let update ={}
    if(params.name){
      update.name = params.name
    }
    if(params.state){
      update.state = params.state
    }
    const editItem = await Item.findOneAndUpdate({_id : new ObjectId(params.itemId)} , {$set : update} , {new : true})
    if (!editItem) {
      throw customException.itemNotEdited();
    }
    return itemsMapper.editItemMapping(editItem);
    
  } catch (err) {
    throw err;
  }
}

/*
********** Delete Item **********
* @params {String} params.itemId
* @returns {Object} item
*/

const deleteItem= async (params) => {
  try {
    const deleteItem = await Item.findOneAndDelete({_id : new ObjectId(params.itemId)})
    if(!deleteItem){
        throw customException.unableToDeleteItem();
    }
    return itemsMapper.deleteItemMapping(deleteItem);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addItem,
  getItem,
  getItemById,
  editItem,
  deleteItem
};
