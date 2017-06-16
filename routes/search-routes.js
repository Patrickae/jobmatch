var path  = require ("path");
var db = require("../models");
const indeed = require('indeed-scraper');


//export routes
module.exports = function(app){

	//when following this route
	app.get("/results", function(req, res){

		//use regex to replace + with " "
		var keyword = req.query.keyword.replace(/[(+)]+/g, " ").toLowerCase();
		var location = req.query.location.replace(/[(+)]+/g, " ").toLowerCase();
		 //you will get the below 

		 console.log(req.query);
		 console.log(keyword);
		 
		const queryOptions = {
		  query: keyword,
		  city: location,
		  radius: '25',
		  level: req.query.level,
		  jobType: 'fulltime',
		  maxAge: '7',
		  sort: 'date',
		  limit: '5'
		};

		indeed.query(queryOptions).then(function(indeedResult) {
			console.log(indeedResult)
			// function filterByTitle(job){
			// 	return job.title.includes(position)
			// }
			// var filterArr = result.filter(filterByTitle)
			// console.log(filterArr)

			// handlebars object for posting result
			var hbsObject = {
				posting: indeedResult
			};
    		res.render("results", hbsObject);
  		 
		});

	});


};