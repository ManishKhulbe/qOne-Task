// setup all routes
const experess = require("express");

const router = experess.Router();

const userRoutes = require("./items/items.routes");
const logInRoutes = require("./userLogin/userLogin.routes");


router.use("/user", userRoutes);
router.use("/login", logInRoutes);


module.exports = router;