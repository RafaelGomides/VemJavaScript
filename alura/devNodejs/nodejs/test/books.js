const http = require('http');


describe('#BooksController', function(done) {
    const conf = {
        hostname: 'localhost',
        port: 3000,
        path: '/produtos',
        headers: {
            'Accept': 'application/json'
        }
    };

    http.get(conf, function(res) {
        if (res.statusCode == 200) console.log("STATUS OK");
        if (res.headers['content-type'] == 'application/json; charset=utf-8') console.log("HEADER OK");
        done();
    });
});