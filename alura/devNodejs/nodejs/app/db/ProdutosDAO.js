function ProdutosBanco(conn) {
    this._conn = conn;
}

ProdutosDAO.prototype.lista = function(cb) {
    this._conn.query('SELECT * FROM books', cb);
}

module.exports = function() {
    return ProdutosDAO;
}