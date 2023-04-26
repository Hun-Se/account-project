import { postSignUp } from "../../api/authAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthType } from "../../types/auth";
export interface authState {
  id: string;
  email: string;
  password: string;
  token: string;
  status: "idle" | "loading" | "failed";
}

const initialState: authState = {
  id: "",
  email: "",
  password: "",
  token: "",
  status: "idle",
};

export const signUpAsync = createAsyncThunk(
  "auth/postSignUp",
  async (params: AuthType) => {
    const response = await postSignUp(params);
    return response.data;
  }
);

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        window.alert("회원가입에 성공하였습니다.");
        state.status = "idle";
        state.email = action.payload;
        state.password = action.payload;
        state.token = action.payload;
      })
      .addCase(signUpAsync.rejected, (state) => {
        window.alert("회원가입에 실패하였습니다. 이미 등록된 이메일 입니다.");
        state.status = "failed";
      });
  },
});

export default signUpSlice.reducer;
