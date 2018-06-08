//request do modulo server
var app = require('./config/server');

var rotaHome = require('./app/routes/index');
rotaHome(app);

var rotaRestaurantes = require('./app/routes/restaurantes');
rotaRestaurantes(app);

app.listen(3000, function(){
    console.log("Server online");
});