import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import ROUTES from "../../constant/routes_constant";
import useAuthChangeHanler from "../../hook/auth/useAuthChangeHanler";
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
    await navigate(ROUTES.DASHBOARD);
  };

  const buttonHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(ROUTES.SIGNUP);
  };

  return (
    <>
      <form className={classes["form-login"]} onSubmit={handleSubmit}>
        <h1>로그인</h1>
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
          type="password"
          autoComplete="off"
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
        <button className={classes["button-abled"]} onClick={buttonHandler}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default LoginForm;
