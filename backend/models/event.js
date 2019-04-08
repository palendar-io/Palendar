"use strict";
var mongoose = require("mongoose");
var eventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    endTime: Date,
    location: String,
    description: String,
    userid: String
});
module.exports = mongoose.model("Events", eventSchema);
