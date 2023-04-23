import Login from "../components/Login/Login";
import ROUTES from "../constant/routes_constant";

const LoginPage = () => {
  if (localStorage.getItem("token")) {
    window.location.href = ROUTES.DASHBOARD;
  }

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
