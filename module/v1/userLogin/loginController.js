const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("./userModal");
const customException = require("../../../customException");
const logInMapper = require("./loginMapper");
const constant = require("../../../constant");
const {CONFIG}= constant.constants
const createJsonToken = (user) => {
  const token = jwt.sign(user, CONFIG.JWT_SECRET);
  return token;
}

const login = async (params) => {
  try {
const user = await User.findOne({username: params.username });

if(!user){
  throw customException.userNotFound();
}

if(user.password !== params.password){
  throw customException.passwordNotMatch();
}
let tokenObj={
  username: user.username,
  userID: user._id,
}
const token = createJsonToken(tokenObj)

return logInMapper.logInMapping(user, token)

  } catch (err) {
   throw err;
  }
};

module.exports = {
  login,
};
