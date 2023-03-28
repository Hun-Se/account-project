"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./models/db");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_errors_1 = __importDefault(require("http-errors"));
const http_status_codes_1 = require("http-status-codes");
const body_parser_1 = __importDefault(require("body-parser"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
(0, db_1.createConnection)();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static("build"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "./build/index.html");
});
app.listen(PORT, () => {
    console.log("server is running");
});
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/users", userRouter_1.default);
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404));
});
app.use((err, req, res, next) => {
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
});
exports.default = app;
