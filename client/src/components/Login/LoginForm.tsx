import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import useAuthChangeHanler from "../../hook/auth/useAuthChangeHanler";
import useNavigatePageHanlder from "../../hook/useNavigePageHanlder";
import { loginAsync } from "../../redux/auth/loginSlice";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(loginAsync({ email, password }));
    await navigate("/dashboard");
  };

  const { navigateSignUpHandler } = useNavigatePageHanlder();

  return (
    <>
      <form className={classes["form-login"]} onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <label htmlFor="loginemail">이메일</label>
        {email.length > 0 && (
          <span
            className={`${classes["email-message"]} ${
              emailValidation ? classes.success : classes.error
            }`}
          >
            {emailMessage}
          </span>
        )}
        <input id="loginemail" type="email" onChange={emailChangeHandler} />

        <label htmlFor="loginpassword">패스워드</label>
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
          id="loginpassword"
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
          로그인
        </button>
        <button
          className={classes["button-abled"]}
          onClick={navigateSignUpHandler}
        >
          회원가입
        </button>
      </form>
    </>
  );
};

export default LoginForm;
