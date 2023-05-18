const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("./userModal");



const login = async (params) => {
  try {

const user = await User
console.log("🚀 ~ file: loginController.js:11 ~ login ~ user:", user)
// console.log(user);
    //     const token = jwt.sign(user, "your_jwt_secret");
    //     return successResponse({ req, res, data: { user, token } });
    //   });
    // })(req, res);
  } catch (err) {
    console.log("🚀 ~ file: loginController.js:17 ~ err:", err)
    // return errorResponse({ req, res, message: "server error" });
  }
};

module.exports = {
  login,
};
