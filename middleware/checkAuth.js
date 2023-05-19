const customException = require("../customException");
const jwt = require("jsonwebtoken");
const responseHandler = require("../responseHandler");

const checkAuth = (req, res, next) => {
  try {
    console.log("req.headers.authorization", req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    const isValid = jwt.verify(token, process.env.JWT_SECRET);
    if (isValid) {
      next();
    }
  } catch (error) {
    responseHandler.sendError(res, customException.unauthorizedUser(), req, 401);
  }
};

module.exports = checkAuth;
