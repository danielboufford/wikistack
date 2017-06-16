const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const sequelize = require('sequelize');
const routes = require('./routes');

var models = require('./models');

var env = nunjucks.configure('views', {noCache: true});
var app = express();
const port = 3000;

models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(port, function () {
        console.log('Server is listening on port ' + port);
    });
})
.catch(console.error);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('public'));
app.use('/', routes);
