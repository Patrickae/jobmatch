
var db = require("../models");

module.exports = function(app){

	app.get("/api/user", function(req,res){

		db.user.findAll({}).then(function(results){
			res.json(results);
		});
	});

	app.post("/api/user", function(req,res){

		console.log(req.body);
		db.user.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			location: req.body.location,
			employ: req.body.employ,
			level: req.body.level


	}).then(function(results){
		res.json(results)
		
		});

	});

};