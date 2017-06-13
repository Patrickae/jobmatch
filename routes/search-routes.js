var path  = require ("path");
var db = require("../models");
const indeed = require('indeed-scraper');

//export routes
module.exports = function(app){

	//when following this route
	app.get("/results/:location/:type/:jobLevel?", function(req, res){

		//use regex to replace + with " "
		var position = req.params.type.replace(/[(+)]+/g, " ").toLowerCase();
		var location = req.params.location.replace(/[(+)]+/g, " ").toLowerCase();
		 //you will get the below 
		 console.log(position);
		const queryOptions = {
		  query: position,
		  city: req.params.location,
		  radius: '25',
		  level: req.params.jobLevel,
		  jobType: 'fulltime',
		  maxAge: '7',
		  sort: 'date',
		  limit: '5'
		};

		indeed.query(queryOptions).then(function(result) {
			console.log(result)
			// function filterByTitle(job){
			// 	return job.title.includes(position)
			// }
			// var filterArr = result.filter(filterByTitle)
			// console.log(filterArr)

			//handlebars object for posting result
			var hbsObject = {
				posting: result
			};
    		res.render("results", hbsObject);
  		 
		});

	});





};