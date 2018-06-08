module.exports = function(app) {
	app.get('/', function(req, res){
	    //res.send("<h1>Hello!</h1<");
	    res.send(console.log('Home is here'));
	});
};