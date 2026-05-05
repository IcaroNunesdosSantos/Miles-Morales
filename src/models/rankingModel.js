var database = require("../database/config");

function buscarRanking() {
    var instrucaoSql = 
    `SELECT u.nome, r.pontuacao FROM ranking r
    JOIN usuario u
    ON r.fkUsuario = u.id
    ORDER BY pontuacao DESC 
    LIMIT 5;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarRanking
}