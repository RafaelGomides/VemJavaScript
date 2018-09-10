const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = function() {
    let app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    load('routes', {
        cwd: 'app'
    }).then('db').into(app);

    return app;
}