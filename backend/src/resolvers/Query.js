"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
exports.Query = {
    feed: function (parent, args, ctx) {
        return ctx.prisma.posts({ where: { published: true } });
    },
    drafts: function (parent, args, ctx) {
        var id = utils_1.getUserId(ctx);
        var where = {
            published: false,
            author: {
                id: id
            }
        };
        return ctx.prisma.posts({ where: where });
    },
    post: function (parent, _a, ctx) {
        var id = _a.id;
        return ctx.prisma.post({ id: id });
    },
    me: function (parent, args, ctx) {
        var id = utils_1.getUserId(ctx);
        return ctx.prisma.user({ id: id });
    }
};
