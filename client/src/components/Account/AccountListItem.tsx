import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import {
  accountDtailModalShown,
  accountEditModalShown,
} from "../../redux/modal/modalSlice";
import { accountDeleteAsync } from "../../redux/account/accountDeleteSlice";
import { AccountType } from "../../types/account";
import classes from "./AccountList.module.css";

const AccountListItem = (props: AccountType) => {
  const [data, setData] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalSales = Number(props.income) - Number(props.expend);

  const onDtailHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountDtailModalShown());
    navigate(`/account/${props._id}`);
  };

  const onEditHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountEditModalShown());
    navigate(`/account/edit/${props._id}`);
  };

  const onRemoveHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountDeleteAsync(props._id));
    setData(false);
  };

  return (
    <>
      {data && (
        <li className={classes["container-list"]}>
          <div className={classes["container-function-button"]}>
            <button
              className={classes["button-dtail"]}
              onClick={onDtailHandler}
            ></button>
            <button
              className={classes["button-edit"]}
              onClick={onEditHandler}
            ></button>
            <button
              className={classes["button-remove"]}
              onClick={onRemoveHandler}
            ></button>
          </div>
          <span className={classes["list-title"]}>{props.date}</span>
          <span className={classes["list-content"]}>{props.item}</span>
          <span className={classes["container-todo-button"]}>
            {props.income}
          </span>
          <span className={classes["container-todo-button"]}>
            {props.expend}
          </span>
          {totalSales ? <span>{totalSales}</span> : <></>}
          <span>{props.memo}</span>
        </li>
      )}
    </>
  );
};

export default AccountListItem;
