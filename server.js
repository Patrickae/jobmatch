
//dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//set up express app
var PORT = process.env.PORT || 8080;
var app = express();

//set the public folder to static
app.use(express.static(process.cwd() + "/public"));

//set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//require the models
var db = require("./models");

//setup handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
require("./routes/review-api-routes.js")(app);
require("./routes/company-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});