import mongoose, { Document, Schema } from "mongoose";

export interface User {
  email: string;
  password: string;
  token: string;
}

export interface UserModel extends User, Document {}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<UserModel>("User", UserSchema);
