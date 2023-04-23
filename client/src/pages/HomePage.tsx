import ROUTES from "../constant/routes_constant";

const HomePage = () => {
  if (localStorage.getItem("token")) {
    window.location.href = ROUTES.DASHBOARD;
  }

  return <></>;
};

export default HomePage;
