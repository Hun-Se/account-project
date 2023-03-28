"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = exports.createResponse = void 0;
const createResponse = (data) => {
    return {
        data,
    };
};
exports.createResponse = createResponse;
const createError = (details) => {
    return {
        details,
    };
};
exports.createError = createError;
