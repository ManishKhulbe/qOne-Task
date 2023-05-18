const express = require("express");
require("dotenv").config();

//db Connection (mongodb)
const {dbConnection} = require("./db/index");
dbConnection.connect().then((db) => {
  const app = express();
  app.use(express.json());
  require("./routes/index")(app);

  app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
  });
});