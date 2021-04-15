var express = require('express');
var app = express();

//console.log();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message" : "HELLO JSON"});
    }
    res.json({"message" : "Hello json"});
});


































 module.exports = app;
