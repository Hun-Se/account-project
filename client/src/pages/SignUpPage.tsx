import SignUp from "../components/SignUp/SignUp";
import ROUTES from "../constant/routes_constant";

const SignUpPage = () => {
  if (localStorage.getItem("token")) {
    window.location.href = ROUTES.DASHBOARD;
  }
  return (
    <>
      <SignUp />
    </>
  );
};

export default SignUpPage;
