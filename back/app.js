var express = require('express');
var app = express();

app.set('view engide', 'ejs');

//request do index
app.get('/', function(req, res){
    res.send("<h1>Ola</h1<");
});

app.listen(3000, function(){
    console.log("Server online")
})