var db = require("../models");

module.exports = function(app){

    app.get("/api/user", function(req,res){

        db.user.findAll({}).then(function(results){
            res.json(results);
        });
    });

    app.post("/api/user",function(req,res){

        db.company.findAll({
            where:{email: req.body.email}
        }).then(function(data){
            console.log(data)
            if(data.length === 0){

                db.email.create({email: req.body.email}).then(function(results){
                    res.json(results);
                });


            }else{
                res.redirect("/search");
            }
        });



    });


};

