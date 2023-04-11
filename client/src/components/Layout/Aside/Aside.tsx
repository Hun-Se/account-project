import React from "react";
import useNavigatePageHanlder from "../../../hook/useNavigePageHanlder";

import classes from "./Aside.module.css";

const Aside = () => {
  const { navigateDashBoardHandler, navigateAccountHandler } =
    useNavigatePageHanlder();
  return (
    <>
      <aside className={classes["aside-container"]}>
        <div className={classes.logo}></div>
        <ul>
          <li
            className={classes["aside-list"]}
            onClick={navigateDashBoardHandler}
          >
            대시보드
          </li>
          <li
            className={classes["aside-list"]}
            onClick={navigateAccountHandler}
          >
            가계부 입력
          </li>
          <li className={classes["aside-list"]}>캘린 더</li>
          <li className={classes["aside-list"]}>세금계산봇</li>
        </ul>
      </aside>
    </>
  );
};

export default Aside;
