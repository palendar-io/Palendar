import express = require("express");

import taskModel = require("../models/task");
import { Request, Response } from "express-serve-static-core";
import { NextFunction } from "connect";

const router = express.Router();

router.get("", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Get: all tasks from ${req.params.userid}`);

    taskModel.find((err, event) => {
        const eventMap : any = [];
        eventMap.push(event);
        res.send(eventMap);
        console.log("success");
    })
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Get: a task from ${req.params.userid} that matches ${req.params.id}`);

    taskModel.find({"_id": req.params.id}, (err: any, event: object) => {
        res.send(event);
        console.log("success");
    })
})

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Post: Create a task ${req.body}`)

    taskModel.create(req.body, (err: any) => {
        if(err) console.log(err);
        else console.log("success");
    })
})

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Put: Update a task ${req.body}`)

    taskModel.findOneAndUpdate({"_id": req.params.id}, req.body, (err) => {
        if (err) console.log(err);
        else console.log("success");
    })
})

router.delete("/:id", (req: Request, res:Response, next: NextFunction) => {
    console.log(`Delete: ${req.params.id}`);

    taskModel.findOneAndDelete({"_id": req.params.id}, (err) => {
        if (err) console.log(err);
        else console.log("success");
    })
})

export = router;