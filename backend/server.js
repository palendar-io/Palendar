const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {buildSchema} = require('graphql');



var schema = buildSchema(`
    type Query {
        user: String 
    }
`)

var root = {
    user: () => {
       return "Username = mosus";
    }
}

const port = process.env.port;
const app = express();
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))


app.listen(port, () => console.log("Server listening on port 8080"));