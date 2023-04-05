import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { signUpAsync } from "../../redux/auth/signUpSlice";
import useAuthChangeHanler from "../../hook/auth/useAuthChangeHanler";
import useNavigatePageHanlder from "../../hook/useNavigePageHanlder";
import classes from "./SignUpForm.module.css";

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
    await navigate("/auth/login");
  };

  const { navigateLoginHandler } = useNavigatePageHanlder();

  return (
    <>
      <form className={classes["form-signup"]} onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <label htmlFor="signupemail">이메일</label>
        {email.length > 0 && (
          <span
            className={`${classes["email-message"]} ${
              emailValidation ? classes.success : classes.error
            }`}
          >
            {emailMessage}
          </span>
        )}
        <input id="signupemail" type="email" onChange={emailChangeHandler} />
        <label htmlFor="signupPassword">패스워드</label>
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
          id="signupPassword"
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
        <button
          className={classes["button-abled"]}
          onClick={navigateLoginHandler}
        >
          로그인페이지 돌아가기
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
