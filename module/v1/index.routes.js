// setup all routes
const experess = require("express");

const router = experess.Router();
const itemsRoutes = require("./items/items.routes");
const logInRoutes = require("./userLogin/userLogin.routes");
const passport = require("passport");
require("../../middleware/isAuth")(passport)

router.use("/login" , logInRoutes);
router.use("/items", passport.authenticate('jwt',{session:false}), itemsRoutes);


module.exports = router;