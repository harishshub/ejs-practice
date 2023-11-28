const express = require("express");
const routes = express.Router();

routes.use("/add", (req, res, next) => {
  res.send(
    "<h1>Add Student!!</h1><br><br><form action ='/store' method ='post'><input type='text' name='name'></input><input type='submit' value='submit'></input></form>"
  );
});

routes.post("/store", (req, res, next) => {
  console.log(req.body);
  res.send("<h1>submitted</h1>");
});

module.exports = routes;
