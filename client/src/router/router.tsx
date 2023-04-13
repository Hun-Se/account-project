import { BrowserRouter, Routes, Route } from "react-router-dom";
import withAuthValidation from "../hoc/withAuthValidation";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DashBoardPage from "../pages/DashBoardPage";
import AccountPage from "../pages/AccountPage";
import AccountForm from "../components/Account/AccountForm";
import AccountDtail from "../components/Account/AccountDtail";
import AccountEdit from "../components/Account/AccountEdit";

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
        <Route path="/account" element={<AuthAccountPage />} />
        <Route path="/account/create" element={<AccountForm />} />
        <Route path="/account/:id" element={<AccountDtail />} />
        <Route path="/account/edit/:id" element={<AccountEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
