var express = require("express");
var router = express.Router();

var favsController = require("../controllers/favsController");

router.put(`/atualizar/:idAranhas`, function (req, res) {
    favsController.favs(req, res);
});

router.get(`/buscar`, function (req, res) {
    favsController.buscarAranhas(req, res);
});

module.exports = router;