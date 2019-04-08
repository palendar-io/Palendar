import * as mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    endTime: Date,
    location: String,
    description: String,
    userid: String,
});

export = mongoose.model("Events", eventSchema);