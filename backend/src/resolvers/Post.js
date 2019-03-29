"use strict";
exports.__esModule = true;
exports.Post = {
    author: function (_a, args, ctx) {
        var id = _a.id;
        return ctx.prisma.post({ id: id }).author();
    }
};
