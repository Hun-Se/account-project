import ROUTES from "../constant/routes_constant";

const HomePage = () => {
  if (localStorage.getItem("token")) {
    window.alert("이미 로그인이 되어있습니다. 로그아웃 후 다시 이용하세요");
    window.location.href = ROUTES.DASHBOARD;
  }

  return <></>;
};

export default HomePage;
