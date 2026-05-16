var favsModel = require("../models/favsModel");

function favs(req, res){
    var idAranhas = req.params.idAranhas;

    favsModel.favs(idAranhas).then((resultado) => {
        if(resultado.affectedRows > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send('ok');
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao atualizar o favoritos", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAranhas(req, res){
    console.log(`Buscando a pontuacao de cada aranha`);

    favsModel.buscarFavs().then(function (resultado){
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as aranhas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    favs,
    buscarAranhas
};