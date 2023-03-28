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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.create = exports.getConnection = exports.createConnection = exports.initDatabase = exports.db = void 0;
const lowdb_1 = require("lowdb");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = require("path");
const nanoid_1 = require("nanoid");
const path_2 = __importDefault(require("path"));
const __dirname = path_2.default.resolve();
const initDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbFolderPath = (0, path_1.join)(__dirname, "./src/db");
    const filePath = (0, path_1.join)(__dirname, "./src/db/db.json");
    const dbFolder = yield promises_1.default.readdir(dbFolderPath).catch(() => void 0);
    const file = yield promises_1.default.readdir(filePath).catch(() => void 0);
    if (!dbFolder) {
        yield promises_1.default.mkdir(dbFolderPath);
    }
    if (!file) {
        yield promises_1.default.writeFile(filePath, JSON.stringify({ users: [] }));
    }
    return filePath;
});
exports.initDatabase = initDatabase;
const createConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = yield (0, exports.initDatabase)();
    const adapter = new lowdb_1.JSONFile(filePath);
    exports.db = new lowdb_1.Low(adapter);
    yield exports.db.read();
    exports.db.data || (exports.db.data = { users: [] });
    yield exports.db.write();
});
exports.createConnection = createConnection;
const getConnection = () => exports.db;
exports.getConnection = getConnection;
const create = (content) => {
    const timestamp = new Date().toISOString();
    return Object.assign(Object.assign({}, content), { id: (0, nanoid_1.nanoid)(), createdAt: timestamp, updatedAt: timestamp });
};
exports.create = create;
const update = (content) => {
    const timestamp = new Date().toISOString();
    return Object.assign(Object.assign({}, content), { updatedAt: timestamp });
};
exports.update = update;
