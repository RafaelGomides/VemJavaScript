module.exports = function(app) {
    app.get('/', function(req, res) {
        const conn = app.db.connectionFactory();
        const prodBanco = new app.db.ProdutosDAO(conn);
        prodBanco.lista(function(err, ret) {
            if (err) {
                console.error(err);
                return next(err);
            } else {
                res.format({
                    html: function() {
                        res.render('home/index', {
                            livros: ret
                        });
                    },
                    json: function() {
                        res.json(ret);
                    }
                });

            }
        });
        conn.end();
    })
}