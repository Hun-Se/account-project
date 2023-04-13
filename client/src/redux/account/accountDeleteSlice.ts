import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteAccount } from "../../api/accountAPI";

export interface accountDeleteState {
  data: {};
  status: "idle" | "loading" | "failed";
}

const initialState: accountDeleteState = {
  data: {},
  status: "idle",
};

export const accountDeleteAsync = createAsyncThunk(
  "accountById/accountGetById",
  async (id: string) => {
    const response = await deleteAccount(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const accountDeleteSlice = createSlice({
  name: "accountById",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(accountDeleteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(accountDeleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = {};
      })
      .addCase(accountDeleteAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default accountDeleteSlice.reducer;
