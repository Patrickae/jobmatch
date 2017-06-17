var db = require("../models");

module.exports = function(app){


//get everything in the company table and display it as json at the given route
app.get("/api/companies",function(req,res){

	db.company.findAll({}).then(function(results){
		res.json(results);
	});

});

app.post("/api/companies",function(req,res){

		db.company.findAll({
		where:{companyName: req.body.companyName}
		}).then(function(data){
			console.log(data)
			if(data.length === 0){

				db.company.create({companyName: req.body.companyName}).then(function(results){
					res.json(results);
				});
	

			}else{
				res.redirect("/profile?companyName="+req.body.companyName);
			}
		});
	

	
});

	
};