"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: "../.env" });
mongoose_1.default.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true });
var User = require('./models/User');
var app = express_1.default();
app.use(express_1.default.json());
app.set("port", process.env.PORT || 8080);
app.get('/', function (req, res) {
    res.send("hello World");
});
exports.default = app;
