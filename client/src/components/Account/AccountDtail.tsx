import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { accountDtailModalShown } from "../../redux/modal/modalSlice";
import { accountGetByIdAsync } from "../../redux/account/accountGetByIdSlice";
import { selectIdData } from "../../redux/account/accountGetByIdSlice";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import classes from "./AccountDtail.module.css";
import ROUTES from "../../constant/routes_constant";

const AccountDtail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectdata = useAppSelector(selectIdData);
  const param = useParams();

  useEffect(() => {
    if (typeof param.id === "string") {
      dispatch(accountGetByIdAsync(param.id));
    }
  }, []);

  const dtailModalHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountDtailModalShown());
    navigate(ROUTES.ACCOUNT);
  };

  return (
    <>
      <Modal onClose={dtailModalHandler}>
        <div className={classes["container-modal"]}>
          <header className={classes["header-account-modal"]}>
            <h3 className={classes["modal-title"]}>자세히보기</h3>
          </header>
          <ul className={classes["container-list"]}>
            <li>
              <span>날짜</span>
              {selectdata.data.date}
            </li>
            <li>
              <span>내용</span>
              {selectdata.data.item}
            </li>
            <li>
              <span>수입</span>
              {selectdata.data.income}
            </li>
            <li>
              <span>지출</span>
              {selectdata.data.expend}
            </li>
            <li className={classes["list-memo"]}>
              <span>메모</span>
              {selectdata.data.memo}
            </li>
          </ul>
          <Button
            name="button-cancle-dtailModal"
            text="닫기"
            clickEvent={dtailModalHandler}
            disabled={false}
          ></Button>
          <button
            className={classes["button-close"]}
            onClick={dtailModalHandler}
          >
            <span className="blind">모달창닫기 버튼</span>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AccountDtail;
