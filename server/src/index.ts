import express from "express";
import http from "http";
import mongoose from "mongoose";
import path from "path";
import { config } from "./config/config.js";
import userRoutes from "./routes/User.js";
import authRoutes from "./routes/authRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

const router = express();
const __dirname = path.resolve();

// MongoDB 연결
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.info("Mongo connected successfully.");
    StartServer();
  })
  .catch((error) => console.error(error));

// 서버시작 함수
const StartServer = () => {
  router.use((req, res, next) => {
    // 요청로그
    console.log(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );
    // 응답로그
    res.on("finish", () => {
      console.log(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  /** Rules of our API */
  router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  // api 경로 설정
  // router.use("/api/users", userRoutes);
  router.use("/api/users", authRoutes);
  router.use("/api/users", userRoutes);
  router.use("/api/accounts", accountRoutes);

  // 동작 확인
  router.get("/ping", (req, res, next) =>
    res.status(200).json({ hello: "world" })
  );

  //client 연결
  router.use(express.static(__dirname + "/dist/build"));

  router.get("/", function (req, res) {
    res.sendFile(__dirname + "/dist/build/index.html");
  });

  // 서버 실행
  http
    .createServer(router)
    .listen(config.server.port, () =>
      console.log(`Server is running on port ${config.server.port}`)
    );
};
