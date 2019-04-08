"use strict";
var express = require("express");
var taskModel = require("../models/task");
var router = express.Router();
router.get("", function (req, res, next) {
    res.send("It's working darling");
});
router.get("/:userid", function (req, res, next) {
    console.log("Get: all events from " + req.params.userid);
    taskModel.find({ "userid": req.params.userid }, function (err, event) {
        var eventMap = [];
        eventMap.push(event);
        res.send(eventMap);
        console.log("success");
    });
});
router.get("/:userid/:id", function (req, res, next) {
    console.log("Get: an event from " + req.params.userid + " that matches " + req.params.id);
    taskModel.find({ "userid": req.params.userid, "_id": req.params.id }, function (err, event) {
        res.send(event);
        console.log("success");
    });
});
router.post("/:userid", function (req, res, next) {
    console.log("Post: Create an event " + req.body);
    taskModel.create(req.body, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
router.put("/:userid/:id", function (req, res, next) {
    console.log("Put: Update an event " + req.body);
    taskModel.findOneAndUpdate({ "userid": req.params.userid, "_id": req.params.id }, req.body, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
router["delete"]("/:userid/:id", function (req, res, next) {
    console.log("Delete: " + req.params.id);
    taskModel.findOneAndDelete({ "userid": req.params.userid, "_id": req.params.id }, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
module.exports = router;
