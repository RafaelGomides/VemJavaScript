module.exports = function() {
    return function(conn) {
        this.lista = function(cb) {
            conn.query('SELECT * FROM books', cb);
        }
        return this;
    }
}