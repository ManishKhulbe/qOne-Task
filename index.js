//requiring baic modules
const express = require("express");
require("dotenv").config();

//db Connection (mongodb)
const db = require("./db/index")
db.connectToMongo();


const app = express();
app.use(express.json());
require("./routes/index")(app);


app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
});
