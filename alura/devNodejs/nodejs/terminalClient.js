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
    title: "THE SATAN PRAYER",
    description: "A way to be eternal",
    price: 66.99
}

client.end(JSON.stringify(produto));