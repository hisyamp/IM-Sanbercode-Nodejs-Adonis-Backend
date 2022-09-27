// import fsPromises from "fs/promises";
const fs = require("fs");
var express = require("express");
var router = express.Router();
var path = "data.json";
const UserController = require("../controllers/employeeController");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/findall", UserController.findAll);

module.exports = router;
