import { Low, JSONFile } from "lowdb";
import fs from "fs/promises";
import { join } from "path";
import { nanoid } from "nanoid";
import path from "path";

import type { User } from "../types/users";

const __dirname = path.resolve();

export interface Data {
  users: User[];
}

export let db: Low<Data>;

export const initDatabase = async () => {
  const dbFolderPath = join(__dirname, "./src/db");
  const filePath = join(__dirname, "./src/db/db.json");
  const dbFolder = await fs.readdir(dbFolderPath).catch(() => void 0);
  const file = await fs.readdir(filePath).catch(() => void 0);

  if (!dbFolder) {
    await fs.mkdir(dbFolderPath);
  }
  if (!file) {
    await fs.writeFile(filePath, JSON.stringify({ users: [] }));
  }

  return filePath;
};

export const createConnection = async () => {
  const filePath = await initDatabase();

  const adapter = new JSONFile<Data>(filePath);
  db = new Low<Data>(adapter);

  await db.read();

  db.data ||= { users: [] };

  await db.write();
};

export const getConnection = () => db;

export const create = <T>(content: any): T => {
  const timestamp = new Date().toISOString();
  return {
    ...content,
    id: nanoid(),
    createdAt: timestamp,
    updatedAt: timestamp,
  };
};

export const update = <T>(content: any): T => {
  const timestamp = new Date().toISOString();
  return {
    ...content,
    updatedAt: timestamp,
  };
};
