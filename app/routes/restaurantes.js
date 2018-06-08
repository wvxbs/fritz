module.exports = function(app){
	app.get('/restaurantes', function(req, res){
	    res.send("<h1>Comida gostosa!</h1<");
	});
};