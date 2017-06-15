// Dependencies
var path  = require ("path");
var db = require("../models");


//export routes

module.exports = function(app){

	app.get("/login", function(req,res){

		res.sendFile(path.join(__dirname, "../public/login.html"))
	});

	app.get("/reviews", function(req,res){

		res.sendFile(path.join(__dirname, "../public/review.html"))
	});

	app.get("/registration", function(req,res){

		res.sendFile(path.join(__dirname, "../views/registration.html"))
	});

	app.get("/search", function(req,res){

		res.sendFile(path.join(__dirname, "../public/search.html"))
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