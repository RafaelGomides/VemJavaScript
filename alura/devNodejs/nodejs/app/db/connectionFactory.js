let mysql = require("mysql");
module.exports = function() {
    return dbConnection;
}

function dbConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '',
        database: 'nodejs'
    });
}