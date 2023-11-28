const express = require("express");
const routes = express.Router();
const path = require('path');

routes.get("/", (req, res, next) => {
  res.send(
    "<h1>Home Page!!</h1>"
  );
});



module.exports = routes;
