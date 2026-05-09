var database = require("../database/config")

function generoMas(){
    var instrucaoSql = `
        SELECT COUNT(u.genero) as generoMas FROM usuario u WHERE u.genero = 'mas';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function generoFem(){
    var instrucaoSql = `
        SELECT COUNT(u.genero) as generoFem FROM usuario u WHERE u.genero = 'fem';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    generoMas,
    generoFem
};