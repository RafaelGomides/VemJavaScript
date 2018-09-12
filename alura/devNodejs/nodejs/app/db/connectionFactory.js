let mysql = require("mysql");
module.exports = function() {
    return dbConnection;
}

function dbConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'bel',
        port: 3306,
        password: 'zebu',
        database: 'nodejs'
    });
}