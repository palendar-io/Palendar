import * as express from "express";
import eventModel = require("../models/event");
import { Request, Response } from "express-serve-static-core";
import { NextFunction } from "connect";

const router = express.Router();

router.get("", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Get: all events`);

    eventModel.find((err, event) => {
        const eventMap : any = [];
        eventMap.push(event);
        res.send(eventMap);
        console.log("success");
    })
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Get: an event from ${req.params.userid} that matches ${req.params.id}`);

    eventModel.find({"_id": req.params.id}, (err: any, event: object) => {
        res.send(event);
        console.log("success");
    })
})

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Post: Create an event ${req.body}`)

    eventModel.create(req.body, (err: any) => {
        if(err) console.log(err);
        else console.log("success");
        res.send(req.body);
    })
})

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Put: Update an event ${req.body}`)

    eventModel.findOneAndUpdate({"_id": req.params.id}, req.body, (err: any) => {
        if (err) console.log(err);
        else console.log("success");
    })
})

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log(`Delete: ${req.params.id}`);

    eventModel.findOneAndDelete({"_id": req.params.id}, (err: any) => {
        if (err) console.log(err);
        else console.log("success");
    })
})

export = router;
