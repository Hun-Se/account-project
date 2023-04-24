import React, { useEffect, useState } from "react";
import classes from "./AccountList.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectData,
  accountGetAsync,
} from "../../redux/account/accountGetSlice";
import { sortData, selectDropDown } from "../../redux/dropdown/dropdownSlice";
import AccountListItem from "./AccountListItem";
import Pagination from "./Pagination";

const AccountList = () => {
  const dispatch = useAppDispatch();
  const { account, status } = useAppSelector(selectData);
  const dropdown = useAppSelector(selectDropDown);
  const [item, setItem] = useState("");
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * limit;
  const [month, setMonth] = useState(0);

  useEffect(() => {
    dispatch(accountGetAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sortData({ account, item }));
  }, [dispatch, account]);

  const monthAccountListItem =
    month === 0
      ? dropdown.isSortedAccount
      : dropdown.isSortedAccount.filter(
          (v) => new Date(v.date).getMonth() + 1 === month
        );

  const showAccountListItem = monthAccountListItem
    .slice(offset, offset + limit)
    .map((list) => (
      <AccountListItem
        _id={list._id}
        key={list._id}
        date={list.date}
        item={list.item}
        income={list.income}
        expend={list.expend}
        memo={list.memo}
      />
    ));

  return (
    <>
      {status === "loading" ? (
        <div>Loding...</div>
      ) : (
        <div className={classes["container-app"]}>
          <label className={classes["label-selectbox"]}>
            페이지 당 표시할 게시물 수:&nbsp;
            <select
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
              <option value="256">256</option>
            </select>
          </label>
          <label className={classes["label-selectbox"]}>
            월별:&nbsp;
            <select
              value={month}
              onChange={({ target: { value } }) => setMonth(Number(value))}
            >
              <option value="0">전체</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
          <ul className={classes["container-title"]}>
            <li>기능</li>
            <li>날짜</li>
            <li>항목</li>
            <li>수입</li>
            <li>지출</li>
            <li>총합</li>
            <li>메모</li>
          </ul>
          <ul>{showAccountListItem}</ul>
          <footer className={classes["footer-pagination"]}>
            <Pagination
              total={account.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
        </div>
      )}
    </>
  );
};

export default AccountList;
