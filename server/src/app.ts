import express from "express";
import type { Request, Response, NextFunction } from "express";
import path, { join } from "path";
import cors from "cors";
import createError from "http-errors";
import { StatusCodes } from "http-status-codes";
import bodyParser from "body-parser";
import userRouter from "./routes/userRouter";
import { createConnection } from "./models/db";

const PORT = process.env.PORT || 3000;

const app = express();

export const __dirname = path.resolve();

createConnection();

app.use(express.static("build"));

app.get("/", function (req, res) {
  const build_path = join(__dirname, "./build/index.html");
  res.sendFile(build_path);
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
