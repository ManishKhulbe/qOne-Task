// setup all routes
const experess = require("express");

const router = experess.Router();
const itemsRoutes = require("./items/items.routes");
const logInRoutes = require("./userLogin/userLogin.routes");
const passport = require("passport");
require("../../middleware/isAuth")(passport);
const checkAuth = require("../../middleware/checkAuth");

router.use("/login", logInRoutes);
router.use(
  "/items",
  checkAuth,
  passport.authenticate("jwt", { session: false }),
  itemsRoutes
);

module.exports = router;
