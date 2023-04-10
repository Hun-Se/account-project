import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
import loginReducer from "../redux/auth/loginSlice";
import signUpReducer from "../redux/auth/signUpSlice";
import dropDownReducer from "../redux/dropdown/dropdownSlice";
import modalReducer from "../redux/modal/modalSlice";
import accountCreateReducer from "../redux/account/accountCreateSlice";
import accountGetReducer from "../redux/account/accountGetSlice";
import accountGetByIdReducer from "../redux/account/accountGetByIdSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    signup: signUpReducer,
    dropdown: dropDownReducer,
    modal: modalReducer,
    accountcreate: accountCreateReducer,
    accountGet: accountGetReducer,
    accountGetById: accountGetByIdReducer,
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
