const http = require('http');
const assert = require('assert');

describe('#BooksController', function() {
    it('#listagem', function(done) {
        const conf = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(conf, function(res) {
            assert.equal(res.statusCode, 200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
        });
    });
});