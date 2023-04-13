import React from "react";
import classes from "./InputSearch.module.css";

const InputSearch = () => {
  return (
    <div className={classes["container-search"]}>
      <div className={classes["icon-search"]}></div>
      <input className={classes["input-search"]} placeholder="검색..." />
    </div>
  );
};

export default InputSearch;
