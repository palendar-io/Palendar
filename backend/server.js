"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var http = require("http");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());
app.use(bodyParser.json());
var server = new http.Server(app);
//Routes
var eventRoutes = require("./routes/events");
var taskRoutes = require("./routes/tasks");
// Connect to Mongo
console.log('Attempting to connect to mongoose');
mongoose.connect('mongodb://xtayuyax:yue5yun5@ds233806.mlab.com:33806/palendar_db')
    .then(function () {
    console.log('Connected to Mongo database!');
})["catch"](function (err) {
    console.error('App starting error:', err.stack);
});
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});
//Set up routes
app.use("/api/events", eventRoutes);
app.use("/api/tasks", taskRoutes);
server.listen(4000, function () {
    console.log("Listening to :4000");
});
exports["default"] = app;
