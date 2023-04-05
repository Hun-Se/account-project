import { BrowserRouter, Routes, Route } from "react-router-dom";
import withAuthValidation from "../hoc/withAuthValidation";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DashBoardPage from "../pages/DashBoardPage";
import AccountPage from "../pages/AccountPage";

const Router = () => {
  const AuthHomePage = withAuthValidation(HomePage);
  const AuthDashboardPage = withAuthValidation(DashBoardPage);
  const AuthAccountPage = withAuthValidation(AccountPage);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthHomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<AuthDashboardPage />} />
        {/* <Route path="/todos" element={<AuthTodoPage />} /> */}
        <Route path="/account" element={<AuthAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
