import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface modalState {
  accountformShown: boolean;
  accountDtailShown: boolean;
  accountEditShown: boolean;
}

const initialState: modalState = {
  accountformShown: false,
  accountDtailShown: false,
  accountEditShown: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    accountFormModalShown: (state) => {
      state.accountformShown = !state.accountformShown;
    },
    accountDtailModalShown: (state) => {
      state.accountDtailShown = !state.accountDtailShown;
    },
    accountEditModalShown: (state) => {
      state.accountEditShown = !state.accountEditShown;
    },
  },
});

export const {
  accountFormModalShown,
  accountDtailModalShown,
  accountEditModalShown,
} = modalSlice.actions;
export const modalSelect = (state: RootState) => state.modal;
export default modalSlice.reducer;
