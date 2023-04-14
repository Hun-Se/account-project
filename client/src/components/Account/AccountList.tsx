import React, { useCallback, useEffect, useState } from "react";
import classes from "./AccountList.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectData,
  accountGetAsync,
} from "../../redux/account/accountGetSlice";
import AccountListItem from "./AccountListItem";
import Pagination from "./Pagination";

const AccountList = () => {
  const [, updateState] = useState({});
  const forceupdate = useCallback(() => updateState({}), []);
  const dispatch = useAppDispatch();
  const { account } = useAppSelector(selectData);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    dispatch(accountGetAsync());
    forceupdate();
  }, []);

  return (
    <>
      {account ? (
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
            {account
              .slice(0)
              .reverse()
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
              ))}
          </ul>
          <footer className={classes["footer-pagination"]}>
            <Pagination
              total={account.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AccountList;
