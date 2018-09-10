function ProdutosDAO(conn) {
    this._conn = conn;
}

ProdutosDAO.prototype.lista = function(cb) {
    this._conn.query('SELECT * FROM books', cb);
}

ProdutosDAO.prototype.salva = function(data, cb) {
    this._conn.query('INSERT INTO books SET ?', data, cb);
}

module.exports = function() {
    return ProdutosDAO;
}