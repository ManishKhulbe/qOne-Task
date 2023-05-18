// const baseUrl = "/user";
// const passport = require("passport");
// const {
//   addItems,
//   listItems,
//   deleteItems,
//   updateItem,
//   isUniqueItem,
// } = require("../controllers/user.controller");
// const {
//   validateAddItemParam,
//   validateDeleteItemParam,
//   validateUpdateItemParam,
// } = require("../middlewares/validate");
const router = require("express").Router();


// router
//   .route("/register")
//   .post([validators.validateRegistration], function (req, res) {
//     console.log(req.body);
//     let { accountNumber, membershipId, name, email, mobileNo } = req.body;

//     userFacade
//       .register({
//         accountNumber,
//         membershipId,
//         name,
//         mobileNo,
//         email,
//       })
//       .then(function (result) {
//         resHndlr.sendSuccess(res, result, req);
//       })
//       .catch(function (err) {
//         resHndlr.sendError(res, err, req);
//       });
//   });


module.exports = router;
// module.exports = (router) => {
//   router.post(
//     baseUrl + "/items",
//     validateAddItemParam,
//     passport.authenticate("jwt", { session: false }),
//     addItems
//   );
//   router.get(
//     baseUrl + "/items",
//     passport.authenticate("jwt", { session: false }),
//     listItems
//   );
//   router.delete(
//     baseUrl + "/items/:id",
//     validateDeleteItemParam,
//     passport.authenticate("jwt", { session: false }),
//     deleteItems
//   );
//   router.put(
//     baseUrl + "/items/:id",
//     validateUpdateItemParam,
//     passport.authenticate("jwt", { session: false }),
//     updateItem
//   );
//   router.post(baseUrl + "/items/isunique", isUniqueItem);
// };
