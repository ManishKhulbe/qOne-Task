const passport = require("passport");
const Item = require("./itemsModal");
const customException = require("../../../customException");
const itemsMapper = require("./itemsMapper");
const { ObjectId } = require("mongodb");

const addItem = async (params) => {
  try {
    const itemExists = await Item.findOne({name:params.name})
    if(itemExists){
        throw customException.itemAlreadyExists();
    }
    let userObj={
      name:params.name,
      state:params.state,
      itemAddedBy:params.userId
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
