"use strict";
exports.__esModule = true;
exports.User = {
    posts: function (_a, args, ctx) {
        var id = _a.id;
        return ctx.prisma.user({ id: id }).posts();
    }
};
