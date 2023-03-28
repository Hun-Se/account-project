"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.login = void 0;
const validator_1 = require("./../utils/validator");
const http_status_codes_1 = require("http-status-codes");
const authorizeUtils_1 = require("../utils/authorizeUtils");
const responseUtils_1 = require("../utils/responseUtils");
const validator_2 = require("../utils/validator");
const userService_1 = require("../services/userService");
// 로그인 기능
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { isValid, message } = (0, validator_2.loginValidator)({ email, password });
    if (!isValid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send((0, responseUtils_1.createError)(message));
    }
    const user = (0, userService_1.findUser)((user) => user.email === email && user.password === password);
    if (user) {
        return res.status(http_status_codes_1.StatusCodes.OK).send({
            message: "성공적으로 로그인 했습니다.",
            token: (0, authorizeUtils_1.createToken)(email),
        });
    }
    else {
        return res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .send((0, responseUtils_1.createError)(validator_1.USER_VALIDATION_ERRORS.USER_NOT_FOUND));
    }
});
exports.login = login;
// 회원 가입 기능
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { isValid, message } = (0, validator_2.loginValidator)({ email, password });
    if (!isValid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send((0, responseUtils_1.createError)(message));
    }
    const existuser = (0, userService_1.findUser)((user) => user.email === email);
    if (existuser) {
        return res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .send((0, responseUtils_1.createError)(validator_1.USER_VALIDATION_ERRORS.EXIST_USER));
    }
    else {
        yield (0, userService_1.createUser)({ email, password });
        return res.status(http_status_codes_1.StatusCodes.OK).send({
            message: "계정이 성공적으로 생성되었습니다.",
            token: (0, authorizeUtils_1.createToken)(email),
        });
    }
});
exports.signUp = signUp;
