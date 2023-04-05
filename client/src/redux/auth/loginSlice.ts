import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/authAPI";
import { AuthType } from "../../types/auth";
import Token from "../../lib/token/token_class";
import { TOKEN_KEY } from "./../../constant/token_constant";

export interface authState {
  id: string;
  email: string;
  password: string;
  isLogin: boolean;
  token: string;
  status: "idle" | "loading" | "failed";
}

const initialState: authState = {
  id: "",
  email: "",
  password: "",
  isLogin: false,
  token: "",
  status: "idle",
};

export const loginAsync = createAsyncThunk(
  "login/postLogin",
  async (params: AuthType) => {
    const response = await postLogin(params);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout: (state, action) => {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.email = action.payload;
        state.password = action.payload;
        state.isLogin = true;
        state.token = action.payload.token;
        Token.setToken(TOKEN_KEY, state.token);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
