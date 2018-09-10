const http = require('http');

const conf = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(conf, function(res) {
    res.on('data', function(body) {
        console.log('RESPONSE: ' + body);
    });
});