var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var PORT = 3000;
var app = express();

app.use(express.static(process.cwd() + "/public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));