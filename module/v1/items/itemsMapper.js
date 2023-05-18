function addItemMapping(params) {
    var respObj = {
        message: "Item added Successfully",
        insertedId : params.insertedId
      };
      return respObj;
}
function listItemMapping(params){
    var respObj = {
        message: "Item List",
        itemsList : params
      };
      return respObj;
}

function editItemMapping(params){
    var respObj = {
        message: "Item Edited Successfully",
        item : params
        };
        return respObj;
}

function deleteItemMapping(params){
    var respObj = {
        message: "Item Deleted Successfully",
        item : params
        };
        return respObj;
}



module.exports = {
    addItemMapping,
    listItemMapping,
    editItemMapping,
    deleteItemMapping
}