var db = require("../models");

module.exports = function(app){


//get everything in the company table and display it as json at the given route
app.get("/api/companies",function(req,res){

	db.company.findAll({}).then(function(results){
		res.json(results);
	});

});


};