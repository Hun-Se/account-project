import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccount } from "../../api/accountAPI";
import { AccountType } from "../../types/account";
import { RootState } from "../../app/store";

export interface accountgetState {
  account: [AccountType];

  status: "idle" | "loading" | "failed";
}

const initialState: accountgetState = {
  account: [
    {
      _id: "",
      date: "",
      item: "",
      income: "",
      expend: "",
      memo: "",
    },
  ],

  status: "idle",
};

export const accountGetAsync = createAsyncThunk(
  "account/accountGet",
  async () => {
    const response = await getAccount();
    // The value we return becomes the `fulfilled` action payload
    return response.account;
  }
);

export const accountGetSlice = createSlice({
  name: "account",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(accountGetAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(accountGetAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.account = action.payload;
      })
      .addCase(accountGetAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const selectData = (state: RootState) => state.accountGet;
export default accountGetSlice.reducer;
