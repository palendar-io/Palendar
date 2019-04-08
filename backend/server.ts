import express = require("express");
import { Request, Response } from "express-serve-static-core";
import { NextFunction } from "connect";
import * as mongoose from "mongoose";
import http = require("http");
import cors = require("cors");
import bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json())
const server = new http.Server(app);

//Routes
import eventRoutes = require("./routes/events");
import taskRoutes = require("./routes/tasks");

// Connect to Mongo

console.log('Attempting to connect to mongoose');

mongoose.connect('mongodb://xtayuyax:yue5yun5@ds233806.mlab.com:33806/palendar_db')
  .then(() => {
    console.log('Connected to Mongo database!');
  })
  .catch(err  => {
    console.error('App starting error:', err.stack);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');

    next();
});

//Set up routes
app.use("/api/events", eventRoutes);
app.use("/api/tasks", taskRoutes);

server.listen(4000, () => {
  console.log("Listening to :4000");
})

export default app;
