var database = require("../database/config")

function favs(idAranhas){
    var instrucaoSql = `
        UPDATE Aranhas 
        SET pontuacao = pontuacao + 1 WHERE idAranhas = ${idAranhas};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFavs(){
    var instrucaoSql = `
        SELECT idAranhas, nome, pontuacao FROM Aranhas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    favs,
    buscarFavs
};