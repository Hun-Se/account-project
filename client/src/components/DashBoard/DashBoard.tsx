import React from "react";
import Aside from "../Layout/Aside/Aside";
import Header from "../Layout/Header/Header";
import Body from "../Layout/Body/Body";
import classes from "./DashBoard.module.css";

const DashBoard = () => {
  return (
    <>
      <div className={classes["container-app"]}>
        <Aside></Aside>
        <main className={classes["container-main"]}>
          <Header></Header>
          <Body></Body>
        </main>
      </div>
    </>
  );
};

export default DashBoard;
