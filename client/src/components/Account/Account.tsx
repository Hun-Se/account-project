import React from "react";
import Aside from "../Layout/Aside/Aside";
import Header from "../Layout/Header/Header";
import AccountButtonList from "./AccountButtonList";
import classes from "./Account.module.css";
import AccountList from "./AccountList";
import AccountForm from "./AccountForm";
import { useAppSelector } from "../../app/hooks";
import { selectModal } from "../../redux/modal/modalSlice";

const Account = () => {
  const modalsown = useAppSelector(selectModal);
  return (
    <>
      <div className={classes["container-app"]}>
        <Aside></Aside>
        <main className={classes["container-main"]}>
          <Header></Header>
          <AccountButtonList />
          <AccountList />
          {modalsown && <AccountForm />}
        </main>
      </div>
    </>
  );
};

export default Account;
