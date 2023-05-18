// setup all routes
const experess = require("express");

const router = experess.Router();

const itemsRoutes = require("./items/items.routes");
const logInRoutes = require("./userLogin/userLogin.routes");


router.use("/items", itemsRoutes);
router.use("/login", logInRoutes);


module.exports = router;