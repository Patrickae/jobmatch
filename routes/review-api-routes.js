
//require our models
var db = require("../models");

//export routes
module.exports = function(app){


//get everything in the reviews table and display it as json at the given route
app.get("/api/reviews",function(req,res){

	db.review.findAll({raw:true}).then(function(results){
		res.json(results);

		console.log(results);
	})


});



app.get("/api/reviews/:company?",function(req,res){

	var searchResult = req.params.company.replace(/([+])+/g, " ");

	db.review.findAll({
		where:{
			companyName: searchResult
		}}).then(function(results){
		res.json(results);

		
	});


});




//posting an entry into the reviews table 
//check review.js for the sender side

app.post("/reviews", function(req,res){

	
	console.log(req.query);


	db.review.create({
		companyName:req.body.thisCompany,
		rating: req.body.rating,
		reviewerStatus: req.body.currentEmployee,
		question1: req.body.q1,
		question2: req.body.q2,
		question3: req.body.q3,
		question4: req.body.q4,
		question5: req.body.q5

	}).then(function(){
		res.redirect("/profile?companyName="+req.query.companyName)
	})
})


};