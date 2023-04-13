import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccountById } from "../../api/accountAPI";
import { AccountType } from "../../types/account";
import { RootState } from "../../app/store";

export interface accountgetState {
  data: {
    _id: string;
    date: string;
    item: string;
    income: string;
    expend: string;
    memo: string;
  };
  status: "idle" | "loading" | "failed";
}

const initialState: accountgetState = {
  data: {
    _id: "",
    date: "",
    item: "",
    income: "",
    expend: "",
    memo: "",
  },
  status: "idle",
};

export const accountGetByIdAsync = createAsyncThunk(
  "accountById/accountGetById",
  async (id: string) => {
    const response = await getAccountById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const accountGetByIdSlice = createSlice({
  name: "accountById",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(accountGetByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(accountGetByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(accountGetByIdAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const selectIdData = (state: RootState) => state.accountGetById;
export default accountGetByIdSlice.reducer;
