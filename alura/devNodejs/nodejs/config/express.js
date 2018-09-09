const express = require('express');
const load = require('express-load');

module.exports = function() {
    let app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', {
        cwd: 'app'
    }).then('db').into(app);

    return app;
}