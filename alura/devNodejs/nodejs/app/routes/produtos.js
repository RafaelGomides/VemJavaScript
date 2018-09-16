module.exports = function(app) {
    app.get('/produtos', function(req, res, next) {
        const conn = app.db.connectionFactory();
        const prodBanco = new app.db.ProdutosDAO(conn);

        prodBanco.lista(function(err, ret) {
            if (err) {
                console.error(err);
                return next(err);
            } else {
                res.format({
                    html: function() {
                        res.render('produtos/lista', {
                            lista: ret
                        });
                    },
                    json: function() {
                        res.json(ret);
                    }
                });

            }
        });
        conn.end();
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form', {
            validationError: {},
            product: {}
        });
    });

    app.post('/produtos', function(req, res) {
        const conn = app.db.connectionFactory();
        const prodBanco = new app.db.ProdutosDAO(conn);
        const produto = req.body;

        const titleValidator = req.assert('title', 'Titulo está vazio');
        titleValidator.notEmpty();

        const error = req.validationErrors();
        if (error) {
            res.format({
                html: function() {
                    res.status(400).render('produtos/form', {
                        validationError: error,
                        product: produto
                    });
                },
                json: function() {
                    res.status(400).json(error);
                }
            });
            return;
        }

        prodBanco.salva(produto, function(err, ret) {
            res.redirect('/produtos')
        });
    });
}