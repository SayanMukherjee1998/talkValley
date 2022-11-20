const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRoute = require("./src/Route/mainRoute");

const app = express();
const port = 5000;
const DB = "mongodb://localhost:27017/talkValley";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoute);

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => {
    app.listen(port, () => {
      console.log(`Server Connected and running on http://localhost:${port} `);
    });
  })
  .catch(err=>console.log(err));
