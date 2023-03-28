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
exports.findUser = exports.createUser = void 0;
const db_1 = require("../models/db");
const createUser = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const newUser = (0, db_1.create)({ email, password });
    (_a = db_1.db.data) === null || _a === void 0 ? void 0 : _a.users.push(newUser);
    yield db_1.db.write();
    return newUser;
});
exports.createUser = createUser;
const findUser = (predicate) => {
    var _a;
    return (_a = db_1.db.data) === null || _a === void 0 ? void 0 : _a.users.find(predicate);
};
exports.findUser = findUser;
