let mysql = require("mysql");
module.exports = function() {
    return dbConnection;
}

function dbConnection() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            port: 3306,
            password: '',
            database: 'nodejs'
        });
    }

    if (process.env.NODE_ENV == 'stage') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            port: 3306,
            password: '',
            database: 'nodejs_stage'
        });
    }
}