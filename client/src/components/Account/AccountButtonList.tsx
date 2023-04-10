import React from "react";
import DropDown from "../DropDown/DropDown";
import classes from "./AccountButtonList.module.css";
import { useAppDispatch } from "../../app/hooks";
import { accountFormModalShown } from "../../redux/modal/modalSlice";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constant/routes_constant";

const AccountButtonList = () => {
  const navigate = useNavigate();

  const itemList = [
    { id: 1, name: "최신순" },
    { id: 2, name: "오래된순" },
    { id: 3, name: "매출순" },
    { id: 4, name: "월별" },
  ];

  const dispatch = useAppDispatch();

  const modalHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountFormModalShown());
    navigate(ROUTES.ACCOUNT_CREATE);
  };

  return (
    <>
      <h1 className={classes["main-title"]}>Account</h1>
      <div className={classes["container-button"]}>
        <div className={classes["container-create-funcion"]}>
          <button
            className={classes["button-createItem"]}
            onClick={modalHandler}
          >
            목록생성
          </button>
          <button className={classes["button-download"]}>다운로드</button>
        </div>
        <div className={classes["container-filter-funcion"]}>
          <DropDown itemList={itemList} />
        </div>
      </div>
    </>
  );
};

export default AccountButtonList;
