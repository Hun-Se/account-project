"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = exports.JWT_TOKEN_SALT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.JWT_TOKEN_SALT = "jwtTokenSalt";
const createToken = (value) => {
    return jsonwebtoken_1.default.sign(value, exports.JWT_TOKEN_SALT);
};
exports.createToken = createToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, exports.JWT_TOKEN_SALT);
};
exports.verifyToken = verifyToken;
