var db = require("../models");

module.exports = function(app){

    app.get("/api/user", function(req,res){

        db.user.findAll({}).then(function(results){
            res.json(results);
        });
    });

};

