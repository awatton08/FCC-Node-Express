var express = require('express');
var app = express();

//console.log();

//app.use(__dirname + "/public", express.static())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});




































 module.exports = app;
