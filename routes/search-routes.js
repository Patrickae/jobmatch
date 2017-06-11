var path  = require ("path");
var db = require("../models");
const indeed = require('indeed-scraper');

//export routes
module.exports = function(app){

	//when following this route
	app.get("/results/:location/:type?", function(req, res){

		 //you will get the below 
		const queryOptions = {
		  query: req.params.type,
		  city: req.params.location,
		  radius: '25',
		  level: 'entry_level',
		  jobType: 'fulltime',
		  maxAge: '7',
		  sort: 'date',
		  limit: '5'
		};

		indeed.query(queryOptions).then(function(result) {

			var hbsObject = {
				posting: result
			};
    		res.render("results", hbsObject);
  		 
		});

	});





};