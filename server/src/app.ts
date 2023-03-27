import { createConnection } from "./models/db";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
import createError from "http-errors";
import { StatusCodes } from "http-status-codes";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter";

createConnection();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("build"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "./build/index.html");
});

app.listen(PORT, () => {
  console.log("server is running");
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use("/users", userRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use(
  (
    err: Error & { state: number },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  }
);

export default app;
