let http = require('http');
let server = http.createServer(function(req, res) {

    if (req.url == "/") {
        res.end("<h1>Listando Produtos</h1>");
    } else {
        res.end("<h1>Página inválida</h1>");
    }
});
server.listen(3000);

console.log("Servidor Rodando");