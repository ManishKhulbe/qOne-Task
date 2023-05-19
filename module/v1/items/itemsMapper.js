const itemsConstants = require('./itemsConstant');
const {RESPONSE_MESSAGE}= itemsConstants.constants

function addItemMapping(params) {
    var respObj = {
        message: RESPONSE_MESSAGE.ADD_ITEM_SUCCESS,
        insertedId : params.insertedId
      };
      return respObj;
}
function listItemMapping(params){
    var respObj = {
        message: RESPONSE_MESSAGE.LIST_ITEM_SUCCESS,
        itemsList : params
      };
      return respObj;
}

function editItemMapping(params){
    var respObj = {
        message: RESPONSE_MESSAGE.EDIT_ITEM_SUCCESS,
        item : params.value
        };
        return respObj;
}

function deleteItemMapping(params){
    var respObj = {
        message: RESPONSE_MESSAGE.DELETE_ITEM_SUCCESS,
        item : params.value
        };
        return respObj;
}



module.exports = {
    addItemMapping,
    listItemMapping,
    editItemMapping,
    deleteItemMapping
}