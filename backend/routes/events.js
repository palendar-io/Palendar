"use strict";
var express = require("express");
var eventModel = require("../models/event");
var router = express.Router();
router.get("", function (req, res, next) {
    console.log("Get: all events");
    eventModel.find(function (err, event) {
        var eventMap = [];
        eventMap.push(event);
        res.send(eventMap);
        console.log("success");
    });
});
router.get("/:id", function (req, res, next) {
    console.log("Get: an event from " + req.params.userid + " that matches " + req.params.id);
    eventModel.find({ "_id": req.params.id }, function (err, event) {
        res.send(event);
        console.log("success");
    });
});
router.post("/", function (req, res, next) {
    console.log("Post: Create an event " + req.body);
    eventModel.create(req.body, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
        res.send(req.body);
    });
});
router.put("/:id", function (req, res, next) {
    console.log("Put: Update an event " + req.body);
    eventModel.findOneAndUpdate({ "_id": req.params.id }, req.body, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
router["delete"]("/:id", function (req, res, next) {
    console.log("Delete: " + req.params.id);
    eventModel.findOneAndDelete({ "_id": req.params.id }, function (err) {
        if (err)
            console.log(err);
        else
            console.log("success");
    });
});
module.exports = router;
