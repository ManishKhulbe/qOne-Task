const express = require("express");
const constant = require("./constant");
const {CONFIG}= constant.constants

//db Connection (mongodb)
const {dbConnection} = require("./db/index");
dbConnection.connect().then((db) => {
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

  app.options("*", (req, res) => {
    res.sendStatus(200);
  });

  require("./routes/index")(app);

  app.listen(CONFIG.PORT || 3001, () => {
    console.log(`Server is running on port ${CONFIG.PORT || 3001}`);
  });
});