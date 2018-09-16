let mysql = require("mysql");
module.exports = function() {
    return dbConnection;
}

function dbConnection() {
    console.log(process.env.NODE_ENV);
    if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
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