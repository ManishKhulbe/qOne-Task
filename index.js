const express = require("express");
const constant = require("./constant");
const {CONFIG}= constant.constants

//db Connection (mongodb)
const {dbConnection} = require("./db/index");
dbConnection.connect().then((db) => {
  const app = express();
  app.use(express.json());

  //cors
  app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header('Access-Control-Allow-Credentials', true);
    response.header("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

  app.options('/*', (req, res) => {
    res.sendStatus(200);
  });

  //routes
  require("./routes/index")(app);

  app.listen(CONFIG.PORT || 3001, () => {
    console.log(`Server is running on port ${CONFIG.PORT || 3001}`);
  });
});