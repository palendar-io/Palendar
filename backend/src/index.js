"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var prisma_client_1 = require("./generated/prisma-client");
var resolvers_1 = require("./resolvers");
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers_1["default"],
    context: function (request) { return (__assign({}, request, { prisma: prisma_client_1.prisma })); }
});
server.start(function () { return console.log("Server is running on http://localhost:4000"); });
var data = require("./events/blogtoEvents.json");
var events = data.events;
console.log(events);
