import { AccountType } from "./../../types/account";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface dropdownState {
  isShown: boolean;
  isSortMeans: string;
  isSortedAccount: [AccountType];
}

const initialState: dropdownState = {
  isShown: false,
  isSortMeans: "",
  isSortedAccount: [
    {
      _id: "",
      date: "",
      item: "",
      income: "",
      expend: "",
      memo: "",
    },
  ],
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    showlist: (state) => {
      state.isShown = !state.isShown;
    },
    sortData: (state, action) => {
      state.isSortMeans = action.payload.item;
      state.isSortedAccount = action.payload.account;
      switch (action.payload.item) {
        case "등록순":
          state.isSortedAccount = action.payload.account.slice(0).reverse();
          return;
        case "최신순":
          state.isSortedAccount = action.payload.account
            .slice(0)
            .sort(function (a: AccountType, b: AccountType) {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
          return;
        case "오래된순":
          state.isSortedAccount = action.payload.account
            .slice(0)
            .sort(function (a: AccountType, b: AccountType) {
              return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
          return;
        case "총합높은순":
          state.isSortedAccount = action.payload.account
            .slice(0)
            .sort(function (a: AccountType, b: AccountType) {
              return (
                Number(b.income) -
                Number(b.expend) -
                (Number(a.income) - Number(a.expend))
              );
            });
          return;
        case "총합낮은순":
          state.isSortedAccount = action.payload.account
            .slice(0)
            .sort(function (a: AccountType, b: AccountType) {
              return (
                Number(a.income) -
                Number(a.expend) -
                (Number(b.income) - Number(b.expend))
              );
            });
          return;
        default:
          state.isSortedAccount = action.payload.account.slice(0).reverse();
          return;
      }
    },
  },
});

export const { showlist, sortData } = dropdownSlice.actions;

export const selectDropDown = (state: RootState) => state.dropdown;

export default dropdownSlice.reducer;
