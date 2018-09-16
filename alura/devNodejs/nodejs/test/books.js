const express = require("../config/express")();
const request = require('supertest')(express);

describe('#BooksController', function() {

    beforeEach(function(done) {
        // NODE-DATABASE-CLEANER
        let conn = express.db.connectionFactory();
        conn.query("DELETE FROM books", function(ex, result) {
            if (!ex) {
                done();
            } else {
                console.error(ex);
                done();
            }
        });
    });

    it('#listagem', function(done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, done);
    });

    it('#Cadastro de novo produto com dados Invalidos', function(done) {
        request.post('/produtos')
            .send({
                title: "",
                description: ""
            })
            .expect(400, done);
    });

    it('#Cadastro de novo produto com dados Invalidos', function(done) {
        request.post('/produtos')
            .send({
                title: "title",
                description: "dsdsd",
                price: 99
            })
            .expect(302, done);
    });
});