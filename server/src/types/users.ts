export interface User {
  id: string;
  email: string;
  password: string;
  createAt: string;
}

export type UserInput = Pick<User, "email" | "password">;
