// Dependencies
var path  = require ("path");

//export routes

module.exports = function(app){

	app.get("/reviews", function(req,res){

		res.sendFile(path.join(__dirname, "../public/review.html"))
	});

	app.get("/registration", function(req,res){

		res.sendFile(path.join(__dirname, "../views/registration.html"))
	});

	app.get("/search", function(req,res){

		res.sendFile(path.join(__dirname, "../public/search.html"))
	})

	app.get("/results", function(req,res){

		res.sendFile(path.join(__dirname, "../public/results.html"))
	})

};