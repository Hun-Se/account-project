"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const http_status_codes_1 = require("http-status-codes");
const responseUtils_1 = require("../utils/responseUtils");
const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .send((0, responseUtils_1.createError)("Token is missing"));
    }
    next();
};
exports.validateToken = validateToken;
