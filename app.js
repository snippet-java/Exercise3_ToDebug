var port = (process.env.VCAP_APP_PORT || 8192);
var express = require('express');
var routes = require('./routes/routes.js');
var app = express();
var bodyParser = require('body-parser');
var logger = require('express-logger');


app.use(bodyParser);
app.use(logger);

app.get('/', routes.get_main);
app.post('/results', routes.post_results);

app.listen(port);
console.log('Server running on port ' + port);
