var express = require('express');
var app = express();

//console.log();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});




































 module.exports = app;
