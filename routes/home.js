const express = require("express");
const routes = express.Router();
const path = require('path');
const root = require('../utils/path')


routes.get("/", (req, res, next) => {
  res.sendFile(
    path.join(root,'views','html','home.html')
  );
});



module.exports = routes;
