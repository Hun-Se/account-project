import api from "./index";
import { AccountType } from "./../types/account";
import API_PATH from "../constant/api_path_constant";

export const postCreateAccount = async (params: AccountType) => {
  const { data } = await api.post(API_PATH.CREATE_ACCOUNT, params);

  return data;
};

export const getAccount = async () => {
  const { data } = await api.get(API_PATH.ACCOUNT);

  return data;
};

export const getAccountById = async (id: string) => {
  const { data } = await api.get(API_PATH.ACCOUNT_BY_ID(id));
  return data;
};

export const deleteAccount = async (id: string) => {
  const { data } = await api.delete(API_PATH.DELETE_ACCOUNT(id));
  return data;
};

export const updateAccount = async (id: string, prams: AccountType) => {
  const { data } = await api.patch(API_PATH.UPDATE_ACCOUNT(id), prams);
  console.log(prams);
  return data;
};
