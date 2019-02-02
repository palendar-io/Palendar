"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var typeDefs = graphql_1.buildSchema("\n    type User {\n        _id: Int!\n        firstName: String\n        lastName: String\n        email: String\n        password: String\n    }\n");
