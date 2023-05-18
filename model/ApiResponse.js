
class APIResponse {
    constructor(statusCode, result,request){
        this.statusCode = statusCode;
        if(statusCode == 200){
            result.message=result.message?result.message:"Api Result";
            result ? this.responseData = result : '';
        }else{
            result ? this.error = result : '';
        }
        this.requestParams=request.body;
        this.time = new Date();
    }
}

// ========================== Export Module Start ==========================
module.exports = APIResponse;
// ========================== Export Module End ============================