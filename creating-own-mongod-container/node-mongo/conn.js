const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mymongo:27017/node-mongoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successfully!!");
  })
  .catch((err) => {
    console.log("Connection failed due to " + err);
  });
