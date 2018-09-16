module.exports = function(app) {
    app.get("/promocoes/form", function(req, res) {
        const conn = app.db.connectionFactory();
        const prodBanco = new app.db.ProdutosDAO(conn);

        prodBanco.lista(function(err, ret) {
            res.render('promocoes/form', {
                lista: ret
            });
        });
        conn.end();
    });

    app.post('/promocoes', function(req, res) {
        const promotion = req.body;
        app.get('io').emit('novaPromocao', promotion);
        res.redirect('promocoes/form');
    });
}