import React, { useCallback, useEffect, useState } from "react";
import classes from "./AccountList.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectData,
  accountGetAsync,
} from "../../redux/account/accountGetSlice";
import AccountListItem from "./AccountListItem";

const AccountList = () => {
  const [, updateState] = useState({});
  const forceupdate = useCallback(() => updateState({}), []);
  const dispatch = useAppDispatch();
  const { account } = useAppSelector(selectData);

  useEffect(() => {
    dispatch(accountGetAsync());
    forceupdate();
  }, []);

  return (
    <>
      {account ? (
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
            {account.map((list) => (
              <AccountListItem
                _id={list._id}
                key={list._id}
                date={list.date}
                item={list.item}
                income={list.income}
                expend={list.expend}
                memo={list.memo}
              />
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AccountList;
