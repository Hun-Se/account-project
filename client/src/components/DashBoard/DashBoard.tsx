import React from "react";
import Aside from "../Layout/Aside/Aside";
import Header from "../Layout/Header/Header";
import classes from "./DashBoard.module.css";
import DashBoardSection from "./DashBoardSection";

const DashBoard = () => {
  return (
    <>
      <div className={classes["container-app"]}>
        <Aside />
        <main className={classes["container-main"]}>
          <Header />
          <DashBoardSection />
        </main>
      </div>
    </>
  );
};

export default DashBoard;
