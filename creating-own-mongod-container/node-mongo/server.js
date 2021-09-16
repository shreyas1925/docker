const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("./conn.js");

app.get("/", (req, res, next) => {
  res.send("HEYY! I am connecting from root/home page!");
});

app.listen(5000, () => {
  console.log("Server is running ate port number 5000");
});
