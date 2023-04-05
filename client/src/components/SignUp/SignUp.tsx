import SignUpForm from "./SignUpForm";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <>
      <div className={classes["container-app"]}>
        <div className={classes["container-signup"]}>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
