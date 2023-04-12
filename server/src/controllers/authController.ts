import { StatusCodes } from "http-status-codes";
import { createToken } from "./../utils/authorizeUtils.js";
import { NextFunction, Request, Response } from "express";
import { loginValidator, USER_VALIDATION_ERRORS } from "../utils/validator.js";
import mongoose from "mongoose";
import User from "../models/User.js";

// 회원 생성
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const { isValid, message } = loginValidator({ email, password });

  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).send(console.log(message));
  }

  try {
    let userEmail = await User.findOne({ email });
    if (userEmail) {
      return res
        .status(400)
        .send(console.log(USER_VALIDATION_ERRORS.EXIST_USER));
    }
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      email,
      password,
      token: createToken(email),
    });

    return (
      user.save() &&
      res.status(StatusCodes.OK).send({
        message: "회원가입 성공",
        token: createToken(email),
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

// 로그인
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const { isValid, message } = loginValidator({ email, password });

  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).send(console.log(message));
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(console.log(USER_VALIDATION_ERRORS.USER_NOT_FOUND));
    }

    return res.status(StatusCodes.OK).send({
      message: "로그인 성공",
      token: createToken(email),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export default { createUser, loginUser };
