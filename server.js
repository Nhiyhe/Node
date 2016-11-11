var express = require('express');

var app = express();

var PORT = process.env.PORT | 3200;

app.get('/', function(req,res){
    res.send("Hello End User");
})

app.listen(PORT, function(){
    console.log("Server is running on port "+ PORT);
});