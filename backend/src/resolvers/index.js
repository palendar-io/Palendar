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
var Query_1 = require("./Query");
var Subscription_1 = require("./Subscription");
var auth_1 = require("./Mutation/auth");
var post_1 = require("./Mutation/post");
var User_1 = require("./User");
var Post_1 = require("./Post");
exports["default"] = {
    Query: Query_1.Query,
    Mutation: __assign({}, auth_1.auth, post_1.post),
    Subscription: Subscription_1.Subscription,
    User: User_1.User,
    Post: Post_1.Post
};
