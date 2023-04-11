import React from "react";
import { useAppSelector } from "../../app/hooks";
import { modalSelect } from "../../redux/modal/modalSlice";
import Aside from "../Layout/Aside/Aside";
import Header from "../Layout/Header/Header";
import AccountButtonList from "./AccountButtonList";
import classes from "./Account.module.css";
import AccountList from "./AccountList";
import AccountForm from "./AccountForm";
import AccountDtail from "./AccountDtail";
import AccountEdit from "./AccountEdit";

const Account = () => {
  const modalShown = useAppSelector(modalSelect);

  return (
    <>
      <div className={classes["container-app"]}>
        <Aside></Aside>
        <main className={classes["container-main"]}>
          <Header></Header>
          <AccountButtonList />
          <AccountList />
          {modalShown.accountformShown && <AccountForm />}
          {modalShown.accountDtailShown && <AccountDtail />}
          {modalShown.accountEditShown && <AccountEdit />}
        </main>
      </div>
    </>
  );
};

export default Account;
