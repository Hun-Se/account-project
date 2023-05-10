import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constant/routes_constant";

import classes from "./Aside.module.css";

const Aside = () => {
  const navigate = useNavigate();
  return (
    <>
      <aside className={classes["aside-container"]}>
        <div className={classes.logo}></div>
        <nav>
          <ul>
            <li
              className={classes["aside-list"]}
              onClick={() => navigate(ROUTES.DASHBOARD)}
            >
              대시보드
            </li>
            <li
              className={classes["aside-list"]}
              onClick={() => navigate(ROUTES.ACCOUNT)}
            >
              가계부 입력
            </li>
            <li
              className={classes["aside-list"]}
              onClick={() => navigate(ROUTES.CALENDAR)}
            >
              캘린더
            </li>
            <li className={classes["aside-list"]}>세금계산봇</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
