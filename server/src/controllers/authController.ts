import { create } from "./../models/db";
import { USER_VALIDATION_ERRORS } from "./../utils/validator";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createToken } from "../utils/authorizeUtils";
import { createError } from "../utils/responseUtils";
import { loginValidator } from "../utils/validator";
import { createUser, findUser } from "../services/userService";
import type { UserInput } from "../types/users";

// 로그인 기능
export const login = async (req: Request, res: Response) => {
  const { email, password }: UserInput = req.body;

  const { isValid, message } = loginValidator({ email, password });
  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).send(createError(message));
  }

  const user = findUser(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.status(StatusCodes.OK).send({
      message: "성공적으로 로그인 했습니다.",
      token: createToken(email),
    });
  } else {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(USER_VALIDATION_ERRORS.USER_NOT_FOUND));
  }
};

// 회원 가입 기능
export const signUp = async (req: Request, res: Response) => {
  const { email, password }: UserInput = req.body;

  const { isValid, message } = loginValidator({ email, password });

  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).send(createError(message));
  }
  const existuser = findUser((user) => user.email === email);
  if (existuser) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(USER_VALIDATION_ERRORS.EXIST_USER));
  } else {
    await createUser({ email, password });

    return res.status(StatusCodes.OK).send({
      message: "계정이 성공적으로 생성되었습니다.",
      token: createToken(email),
    });
  }
};
