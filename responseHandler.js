
const customException = require('./customException')
const APIResponse = require('./model/ApiResponse');
    
const constant={
    STATUS_CODE:{
        SUCCESS:200,
        ERROR:500
    }
}
     

function _sendResponse(response, result,STATUS_CODE) {
    if(STATUS_CODE){
        return response.status(STATUS_CODE).send(result);
    }
    return response.send(result);
}

function sendError(response, error,request , STATUS_CODE = constant.STATUS_CODE.ERROR) {
    if (!error.errorCode) {
        console.error(error, "Unhandled error.");
        error = customException.internalServerErr(error);
    }
    var result = new APIResponse(STATUS_CODE, error,request);
    _sendResponse(response, result ,STATUS_CODE);
}

function handleError(error, request, response, STATUS_CODE) {
    sendError(response, error,request , STATUS_CODE);
}

function sendSuccess(response, result,request , STATUS_CODE = constant.STATUS_CODE.SUCCESS ) {
    var result = new APIResponse(STATUS_CODE, result,request); 
    _sendResponse(response, result);
}



// ========================== Export Module Start ==========================
module.exports = {
    sendError,
    handleError,
    sendSuccess
}
// ========================== Export Module End ============================