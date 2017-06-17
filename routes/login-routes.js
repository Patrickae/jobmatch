var db = require("../models");

module.exports = function(app){

    app.get("/api/login", function(req,res){

        db.user.findAll({}).then(function(results){
            res.json(results);
        });
    });

    app.post("/api/login",function(req,res){
        console.log(req.body.email);

        db.user.findAll({
            where:{email: req.body.email}
        }).then(function(data){
            console.log(data)
            if(data.length === 0){

                console.log("User not found.");
           
                // db.user.create({email: req.body.email}).then(function(results){
                //     res.json(results);
                // });


            }else{
                res.redirect("/search");
            }
        });



    });


};


