var kpisModel = require("../models/kpisModel");

function generoMas(req, res){
    var idUsuario = req.params.idUsuario;

    kpisModel.generoMas().then((resultado) => {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send('ok');
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar o genêro masculino", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

function generoFem(req, res){
    var idUsuario = req.params.idUsuario;

    kpisModel.generoFem().then((resultado) => {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send('ok');
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao buscar o genêro masculino", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    generoMas,
    generoFem
}
