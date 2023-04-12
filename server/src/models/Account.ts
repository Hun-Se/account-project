import mongoose, { Document, Schema } from "mongoose";

export interface Account {
  date: string;
  expend: string;
  income: string;
  item: string;
  memo: string;
}

export interface AccountModel extends Account, Document {}

const AccountSchema: Schema = new Schema(
  {
    date: { type: String, required: false },
    expend: { type: String, required: false },
    income: { type: String, required: false },
    item: { type: String, required: false },
    memo: { type: String, required: false },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<AccountModel>("Account", AccountSchema);
