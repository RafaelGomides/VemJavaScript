const express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log("Servidor iniciado");
});

app.get('/produtos', function(req, res) {
    res.render("produtos/lista")
});