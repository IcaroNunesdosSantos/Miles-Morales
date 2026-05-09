var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController");

router.get("/generoMas", function (req, res){
    kpisController.generoMas(req, res);
});

router.get("/generoFem", function (req, res){
    kpisController.generoFem(req, res);
});

module.exports = router;