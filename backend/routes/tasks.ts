import express = require("express");

import taskModel = require("../models/task");
import { Request, Response } from "express-serve-static-core";
import { NextFunction } from "connect";

const router = express.Router();

router.get("", (req: Request, res: Response, next: NextFunction) => {
    res.send("It's working darling");
})

router.get("/:userid", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Get: all events from ${req.params.userid}`);

    taskModel.find({"userid": req.params.userid}, (err, event) => {
        const eventMap : any = [];
        eventMap.push(event);
        res.send(eventMap);
        console.log("success");
    })
});

router.get("/:userid/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Get: an event from ${req.params.userid} that matches ${req.params.id}`);

    taskModel.find({"userid": req.params.userid, "_id": req.params.id}, (err: any, event: object) => {
        res.send(event);
        console.log("success");
    })
})

router.post("/:userid", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Post: Create an event ${req.body}`)

    taskModel.create(req.body, (err: any) => {
        if(err) console.log(err);
        else console.log("success");
    })
})

router.put("/:userid/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Put: Update an event ${req.body}`)

    taskModel.findOneAndUpdate({"userid": req.params.userid, "_id": req.params.id}, req.body, (err) => {
        if (err) console.log(err);
        else console.log("success");
    })
})

router.delete("/:userid/:id", (req: Request, res:Response, next: NextFunction) => {
    console.log(`Delete: ${req.params.id}`);

    taskModel.findOneAndDelete({"userid": req.params.userid, "_id": req.params.id}, (err) => {
        if (err) console.log(err);
        else console.log("success");
    })
})

export = router;