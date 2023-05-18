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


module.exports = {
    addItemMapping,
    listItemMapping
}