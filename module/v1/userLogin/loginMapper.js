const loginConstants = require('./loginConstant');
const {RESPONSE_MESSAGE}= loginConstants.constants;

function logInMapping(user, token) {
    var respObj = {
        message: RESPONSE_MESSAGE.LOGIN_SUCCESS,
        userId : user._id,
        username : user.username,
        accessToken : token
      };
      return respObj;
}

module.exports = {
    logInMapping
}