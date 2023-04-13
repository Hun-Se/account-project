import { useNavigate } from "react-router-dom";
import ROUTES from "../constant/routes_constant";

const useNavigatePageHanlder = () => {
  const navigate = useNavigate();

  const navigateLoginHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(ROUTES.LOGIN);
  };

  const navigateSignUpHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(ROUTES.SIGNUP);
  };

  const navigateDashBoardHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(ROUTES.DASHBOARD);
  };

  const navigateAccountHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(ROUTES.ACCOUNT);
  };

  return {
    navigateLoginHandler,
    navigateSignUpHandler,
    navigateDashBoardHandler,
    navigateAccountHandler,
  };
};

export default useNavigatePageHanlder;
