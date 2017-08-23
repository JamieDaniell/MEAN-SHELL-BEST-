var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// app.set("view engine" , "ejs");
////////////////////
// Angular routing --> sent the root path to the web_app/dist folder
////////////////////
app.use(express.static(path.resolve(__dirname, 'web_app/dist')));
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
////////////////////
// Database 
//////////////////// 
mongoose.connect("mongodb://localhost/mean_starter_app" , { useMongoClient: true });

////////////////////
// API ROUTES
////////////////////

function handleError(res , reason , message , code)
{
    console.log("Error: "+ reason);
    res.status(code|| 500).json({ "error" : message});
}

app.get("/" , function(req , res)
{
    res.render("./index");
    
});
// app.get("api/localevents" , function(req , res)
// {
//     mongoose.find({} , function( error , result){
//         if(error)
//         {
//             handleError(res, error.message , "Failed to load Database" );
//         }
//         else
//         {
//             res.status(200).json(result);
//         }
//     })
// });

////////////////////
// App listening 
////////////////////
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function()
{
    console.log("MEAN App has Started. Running On: " + process.env.PORT);
});

