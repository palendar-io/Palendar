import * as mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    date: Date,
    description: String,
    complete: Boolean,
    failed: Boolean,
    userid: String,
});

export = mongoose.model("Tasks", taskSchema);