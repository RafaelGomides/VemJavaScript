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

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res) {
        const conn = app.db.connectionFactory();
        const prodBanco = new app.db.ProdutosDAO(conn);
        const produto = req.body;
        prodBanco.salva(produto, function(err, ret) {
            res.redirect('/produtos')
        });
    });
}