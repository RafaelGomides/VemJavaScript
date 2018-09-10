module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        const conn = app.db.connectionFactory();
        const prodBanco = new app.db.ProdutosDAO(conn);

        prodBanco.lista(function(err, ret) {
            res.render('produtos/lista', {
                lista: ret
            });
        });
        conn.end();
    });
}