const router = require("express").Router();
const itemsValidator = require("./itemsValidator");
const itemsController = require("./itemsController");

const resHndlr = require("../../../responseHandler");

router
  .route("/addItem")
  .post(itemsValidator.validateItem, function (req, res) {
    let { state , name } = req.body;
    itemsController
      .addItem({
        state , name
      })
      .then(function (result) {
        resHndlr.sendSuccess(res, result, req);
      })
      .catch(function (err) {
        resHndlr.sendError(res, err, req);
      });
  });

  router
  .route("/getItem")
  .get( function (req, res) {
    let { state , name } = req.body;
    itemsController
      .getItem({
        state , name
      })
      .then(function (result) {
        resHndlr.sendSuccess(res, result, req);
      })
      .catch(function (err) {
        resHndlr.sendError(res, err, req);
      });
  });

  router
  .route("/getItemById")
  .get( function (req, res) {
    let { itemId } = req.query;
    itemsController
      .getItemById({
        itemId
      })
      .then(function (result) {
        resHndlr.sendSuccess(res, result, req);
      })
      .catch(function (err) {
        resHndlr.sendError(res, err, req);
      });
  });

  router
  .route("/editItem")
  .put(itemsValidator.validateItem, function (req, res) {
    let { name , state } = req.body;
    let { itemId} = req.query;
    itemsController
      .editItem({
        name , state ,itemId
      })
      .then(function (result) {
        resHndlr.sendSuccess(res, result, req);
      })
      .catch(function (err) {
        resHndlr.sendError(res, err, req);
      });
  });

  router
  .route("/deleteItem")
  .put( function (req, res) {
    let { itemId} = req.query;
    itemsController
      .deleteItem({
      itemId
      })
      .then(function (result) {
        resHndlr.sendSuccess(res, result, req);
      })
      .catch(function (err) {
        resHndlr.sendError(res, err, req);
      });
  });

  

module.exports = router;
