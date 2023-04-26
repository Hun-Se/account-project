import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { signUpAsync } from "../../redux/auth/signUpSlice";
import useAuthChangeHanler from "../../hook/auth/useAuthChangeHanler";
import classes from "./SignUpForm.module.css";
import ROUTES from "../../constant/routes_constant";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const {
    emailMessage,
    passwordMessage,
    emailValidation,
    passwordValidation,
    email,
    password,
    emailChangeHandler,
    passwordChangeHandler,
  } = useAuthChangeHanler();

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(signUpAsync({ email, password }));
    await navigate(ROUTES.LOGIN);
  };

  const buttonHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <form className={classes["form-signup"]} onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <label htmlFor="email">이메일</label>
        {email.length > 0 && (
          <span
            className={`${classes["email-message"]} ${
              emailValidation ? classes.success : classes.error
            }`}
          >
            {emailMessage}
          </span>
        )}
        <input
          id="email"
          autoComplete="off"
          type="email"
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">패스워드</label>
        {password.length > 0 && (
          <span
            className={`${classes["password-message"]} ${
              passwordValidation ? classes.success : classes.error
            }`}
          >
            {passwordMessage}
          </span>
        )}
        <input
          id="password"
          autoComplete="off"
          type="password"
          onChange={passwordChangeHandler}
        />
        <button
          disabled={!(emailValidation && passwordValidation)}
          className={
            !(emailValidation && passwordValidation)
              ? classes["button-disabled"]
              : classes["button-abled"]
          }
        >
          회원가입
        </button>
        <button className={classes["button-abled"]} onClick={buttonHandler}>
          로그인페이지 돌아가기
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
