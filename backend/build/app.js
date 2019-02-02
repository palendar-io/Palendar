"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var express_graphql_1 = __importDefault(require("express-graphql"));
// Environment Variables
dotenv_1.default.config({ path: "../.env" });
// Database Connection
mongoose_1.default.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true });
//Models
var User = require('./models/User');
// GraphQL Schemas and Resolvers
var usScema = require('./graphql/schemas/User');
var app = express_1.default();
app.use(express_1.default.json());
app.set("port", process.env.PORT || 8080);
app.use('/graphql', express_graphql_1.default({
    schema: usScema,
    rootValue: {
        users: function () {
            return 'test successfull';
        }
    },
    graphiql: true
}));
exports.default = app;
