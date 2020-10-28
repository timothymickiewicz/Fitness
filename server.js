const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
const app = express();
const logger = require("morgan");
const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuring cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Requiring our routes
app.use(require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// The "catchall" handler: for any request that doesn't
// match one above, send back our index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// set port, listen for requests
db.sequelize.sync().then(function () {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
});