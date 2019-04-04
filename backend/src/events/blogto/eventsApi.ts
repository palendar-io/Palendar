import * as  data from './blogtoEvents.json';
import blogtoScraper from './blogto-nextDayToJSON';
const express = require("express");
const app = express();
const port = 8000;
const category = 'events';
const siteName = 'blogto';

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    blogtoScraper()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    res.send(data);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${port}` );
} );