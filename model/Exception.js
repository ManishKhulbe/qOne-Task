class Exception {
  constructor(errorCode, message, errorStackTrace ) {
    this.errorCode = errorCode;
    this.responseMessage = message;
    if(errorStackTrace){
      this.errors = errorStackTrace;
    }
  }
}
module.exports = Exception;
