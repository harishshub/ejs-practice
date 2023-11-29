const express = require("express");
const routes = express.Router();
const path = require('path')
const root = require('../utils/path');

routes.use("/add", (req, res, next) => {
  res.sendFile(
    path.join(root,'views','html','admin.html')
  );
});

routes.post("/store", (req, res, next) => {
  console.log(req.body);
  res.send("<h1>submitted</h1>");
});

module.exports = routes;
