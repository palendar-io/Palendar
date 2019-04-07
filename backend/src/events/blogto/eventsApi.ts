import * as  data from './blogtoEvents.json';
import blogtoScraper from './blogto-nextDayToJSON';
import express from 'express';
import cors from 'cors';
const app = express();
// const express = require("express");
// const cors = require('cors');
// const app = express();

//url routing
const port = 3500;
const category = 'events';
const siteName = 'blogto';

//use cors to prevent connect refused error
app.use(cors());

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    blogtoScraper()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    res.send(data);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${port}/blogto` );
} );