const router = require("express").Router();
const loginValidator = require("./loginValidator");
const loginController = require("./loginController");
const resHndlr = require("../../../responseHandler");

router
  .route("/userLogin")
  .post([loginValidator.validateLogIn], function (req, res) {
    let { userName, password } = req.body;

    loginController
      .login({
        userName,
        password,
      })
      .then(function (result) {
        resHndlr.sendSuccess(res, result, req);
      })
      .catch(function (err) {
        console.log("🚀 ~ file: userLogin.routes.js:20 ~ err:", err)
        resHndlr.sendError(res, err, req);
      });
  });

module.exports = router;
