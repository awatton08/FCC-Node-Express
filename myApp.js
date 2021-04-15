var express = require('express');
var app = express();

//console.log();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    let response = "Hello json";
    if(process.env.MESSAGE_STYLE == "uppercase"){
        response = response.toUpperCase();
    }else{
    }
    res.json({"message" : response});
});


































 module.exports = app;
