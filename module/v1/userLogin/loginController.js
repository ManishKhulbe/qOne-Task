const jwt = require("jsonwebtoken");
const passport = require("passport");


const login = async (params) => {
  console.log("🚀 ~ file: loginController.js:6 ~ login ~ params:", params)
  try {
    
    // passport.authenticate("local", { session: false }, (err, user, info) => {
    //   if (err || !user) {
    //     return res.status(400).json({
    //       message: info ? info.message : "Login failed",
    //       user: user,
    //     });
    //   }

    //   req.login(user, { session: false }, (err) => {
    //     if (err) {
    //       res.send(err);
    //     }

    //     const token = jwt.sign(user, "your_jwt_secret");
    //     return successResponse({ req, res, data: { user, token } });
    //   });
    // })(req, res);
  } catch (err) {
    // return errorResponse({ req, res, message: "server error" });
  }
};

module.exports = {
  login,
};
