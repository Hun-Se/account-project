import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
import loginReducer from "../redux/auth/loginSlice";
import signUpReducer from "../redux/auth/signUpSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    signup: signUpReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
