import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

// Environment Variables
dotenv.config({ path: "../.env"});

// Database Connection
mongoose.connect(process.env.MONGO_CONNECTION!,{useNewUrlParser: true})


//Models
const User = require('./models/User');

const app = express();

app.use(express.json());
app.set("port", process.env.PORT || 8080);

app.use('/graphql', graphqlHTTP)



export default app;