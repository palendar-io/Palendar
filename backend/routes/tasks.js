"use strict";
var express = require("express");
var taskModel = require("../models/task");
var router = express.Router();
router.get("", function (req, res, next) {
    console.log("Get: all tasks from " + req.params.userid);
    taskModel.find(function (err, event) {
        var eventMap = [];
        eventMap.push(event);
        res.send(eventMap);
        console.log("success");
    });
});
router.get("/:id", function (req, res, next) {
    console.log("Get: a task from " + req.params.userid + " that matches " + req.params.id);
    taskModel.find({ "_id": req.params.id }, function (err, event) {
        res.send(event);
        console.log("success");
    });
});
router.post("/", function (req, res, next) {
    console.log("Post: Create a task " + req.body);
    taskModel.create(req.body, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
router.put("/:id", function (req, res, next) {
    console.log("Put: Update a task " + req.body);
    taskModel.findOneAndUpdate({ "_id": req.params.id }, req.body, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
router["delete"]("/:id", function (req, res, next) {
    console.log("Delete: " + req.params.id);
    taskModel.findOneAndDelete({ "_id": req.params.id }, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
module.exports = router;
