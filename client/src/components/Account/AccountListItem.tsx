import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accountDtailModalShown } from "../../redux/modal/modalSlice";
import { AccountType } from "../../types/account";
import classes from "./AccountList.module.css";

const AccountListItem = (props: AccountType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = Number(props.income) + Number(props.expend);

  const onDtailHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountDtailModalShown());
    navigate(`/account/${props._id}`);
  };

  return (
    <>
      <li className={classes["container-list"]}>
        <div className={classes["container-function-button"]}>
          <button
            className={classes["button-dtail"]}
            onClick={onDtailHandler}
          ></button>
          <button className={classes["button-edit"]}></button>
          <button className={classes["button-remove"]}></button>
        </div>
        <span className={classes["list-title"]}>{props.date}</span>
        <span className={classes["list-content"]}>{props.item}</span>
        <span className={classes["container-todo-button"]}>{props.income}</span>
        <span className={classes["container-todo-button"]}>{props.expend}</span>
        {total ? <span>{total}</span> : <></>}
        <span>{props.memo}</span>
      </li>
    </>
  );
};

export default AccountListItem;
