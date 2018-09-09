module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        const conn = app.db.connectionFactory();
        conn.query('SELECT * FROM nodejs.books', function(err, ret) {
            res.render('produtos/lista', {
                lista: ret
            });
        });
        conn.end();
    });
}