import React from "react";
import classes from "./Header.module.css";
import LeftHeaderList from "./LeftHeaderList";
import RightHeaderList from "./RightHeaderList";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <LeftHeaderList />
        <RightHeaderList />
      </header>
    </>
  );
};

export default Header;
