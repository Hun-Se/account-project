import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import Account from "../models/Account.js";

export const createAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, income, expend, item, memo } = req.body;

  try {
    const account = new Account({
      _id: new mongoose.Types.ObjectId(),
      date,
      income,
      expend,
      item,
      memo,
    });

    return (
      account.save() &&
      res.status(StatusCodes.OK).send({
        message: "account가 성공적으로 생성되었습니다.",
        _id: mongoose.Types.ObjectId,
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export const getAccount = (req: Request, res: Response) => {
  return Account.find()
    .then((account) => res.status(200).json({ account }))
    .catch((error) => res.status(500).json({ error }));
};

export const getAccountById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accountId = req.params.id;

  return Account.findById(accountId)
    .then((data) =>
      data
        ? res.status(200).json({ data })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

const deleteAccount = (req: Request, res: Response, next: NextFunction) => {
  const accountId = req.params.id;

  return Account.findByIdAndDelete(accountId)
    .then((account) =>
      account
        ? res.status(201).json({ account, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

const updateAccount = (req: Request, res: Response, next: NextFunction) => {
  const accountId = req.params.id;
  return Account.findById(accountId)
    .then((account) => {
      if (account) {
        account.set(req.body);
        return account
          .save()
          .then((account) => res.status(201).json({ account }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createAccount,
  getAccount,
  getAccountById,
  deleteAccount,
  updateAccount,
};
