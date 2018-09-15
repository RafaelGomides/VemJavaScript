const express = require("../config/express")();
const request = require('supertest')(express);

describe('#BooksController', function() {
    it('#listagem', function(done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, done);
    });
});