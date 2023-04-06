import React from "react";
import classes from "./AccountList.module.css";

// interface TodoItemProps {
//   title: string;
//   id: string;
//   content: string;
// }

const AccountList = () => {
  return (
    <>
      <div className={classes["container-app"]}>
        <ul className={classes["container-title"]}>
          <li>기능</li>
          <li>날짜</li>
          <li>항목</li>
          <li>수입</li>
          <li>지출</li>
          <li>총합</li>
          <li>메모</li>
        </ul>
        <ul>
          <li className={classes["container-list"]}>
            <div className={classes["container-function-button"]}>
              <button className={classes["button-dtail"]}></button>
              <button className={classes["button-edit"]}></button>
              <button className={classes["button-remove"]}></button>
            </div>
            <span className={classes["list-title"]}>2023.04.05</span>
            <span className={classes["list-content"]}>매출</span>
            <span className={classes["container-todo-button"]}>100,000</span>
            <span className={classes["container-todo-button"]}>5,000</span>
            <span>95000</span>
            <span>수수료 5000원으로 인한 지출</span>
          </li>
          <li className={classes["container-list"]}>
            <div className={classes["container-function-button"]}>
              <button className={classes["button-dtail"]}></button>
              <button className={classes["button-edit"]}></button>
              <button className={classes["button-remove"]}></button>
            </div>
            <span className={classes["list-title"]}>2023.04.05</span>
            <span className={classes["list-content"]}>매출</span>
            <span className={classes["container-todo-button"]}>100,000</span>
            <span className={classes["container-todo-button"]}>5,000</span>
            <span>95000</span>
            <span>수수료 5000원으로 인한 지출</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountList;
