function logInMapping(user, token) {
    var respObj = {
        message: "You are logged in successfully",
        userId : user._id,
        username : user.username,
        accessToken : token
      };
      return respObj;
}

module.exports = {
    logInMapping
}