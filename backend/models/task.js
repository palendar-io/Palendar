"use strict";
var mongoose = require("mongoose");
var taskSchema = new mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    complete: Boolean,
    failed: Boolean,
    userid: String
});
module.exports = mongoose.model("Tasks", taskSchema);
