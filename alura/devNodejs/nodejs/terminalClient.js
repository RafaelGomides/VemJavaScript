const http = require('http');

const conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

const client = http.request(conf, function(res) {
    res.on('data', function(body) {
        console.log('RESPONSE: ' + body);
    });
});


const produto = {
    title: "FILHO DA PUTA",
    description: "TE COMEU",
    price: 66
}

client.end(JSON.stringify(produto));
