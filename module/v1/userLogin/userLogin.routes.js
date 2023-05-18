const router = require("express").Router();
const loginValidator = require("./loginValidator");
const loginController = require("./loginController");
const resHndlr = require("../../../responseHandler");

router
  .route("/userLogin")
  .post(loginValidator.validateLogIn, function (req, res) {

    let { username, password } = req.body;

    loginController
      .login({
        username,
        password,
      })
      .then(function (result) {
        resHndlr.sendSuccess(res, result, req);
      })
      .catch(function (err) {
        resHndlr.sendError(res, err, req);
      });
  });

module.exports = router;
