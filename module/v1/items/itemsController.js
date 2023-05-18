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
    const addItem = await Item.save(params);
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


module.exports = {
  addItem,
  getItem,
  getItemById
};
