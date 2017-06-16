// Dependencies
var path  = require ("path");
var db = require("../models");


//export routes

module.exports = function(app){

	app.get("/login", function(req,res){

		res.sendFile(path.join(__dirname, "../views/login.html"))
	});

	app.get("/registration", function(req,res){

		res.sendFile(path.join(__dirname, "../views/registration.html"))
	});

	app.get("/search", function(req,res){

		res.sendFile(path.join(__dirname, "../views/search.html"))
	});

	app.get("/profile", function(req,res){

		

		db.review.findAll({where:{
			companyName: req.query.companyName},raw:true}).then(function(results){

			var hbsObject = {
				thisCompany: req.query.companyName,
				review: results
			};

					

			res.render("profile", hbsObject);
		
		})

	});



};