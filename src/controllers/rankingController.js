var rankingModel = require("../models/rankingModel");

function buscarRanking(req, res) {
  var idUsuario = req.params.idUsuario;

  rankingModel.buscarRanking().then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).send('ok');
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar o ranking: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
    buscarRanking
}