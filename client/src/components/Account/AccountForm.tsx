import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { accountFormModalShown } from "../../redux/modal/modalSlice";
import { AccountType } from "../../types/account";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import classes from "./AccountForm.module.css";
import ROUTES from "../../constant/routes_constant";

const AccountForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<AccountType>();

  const onSubmit: SubmitHandler<AccountType> = (data) => {
    axios
      .post(`${process.env.REACT_APP_DB_HOST}/api/accounts/create`, data)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    dispatch(accountFormModalShown());
    navigate(ROUTES.ACCOUNT);
  };

  const modalHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountFormModalShown());
    navigate(ROUTES.ACCOUNT);
  };

  return (
    <>
      <Modal onClose={modalHandler}>
        <div className={classes["container-modal"]}>
          <header className={classes["header-account-modal"]}>
            <h3 className={classes["form-title"]}>목록생성</h3>
          </header>
          <form
            className={classes["container-form"]}
            action="submit"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label id="date" className={classes["label-date"]}>
                날짜
              </label>
              <input
                id="date"
                type="date"
                className={classes["input-date"]}
                {...register("date")}
              />
            </div>
            <div>
              <label htmlFor="item">항목</label>
              <input
                className={classes["input-item"]}
                id="item"
                placeholder="ex) 월급..."
                type="text"
                {...register("item")}
              />
            </div>
            <div>
              <label htmlFor="income">수입</label>
              <input
                className={classes["input-income"]}
                id="income"
                placeholder="원..."
                type="number"
                {...register("income")}
              />
            </div>
            <div>
              <label htmlFor="expend">지출</label>
              <input
                className={classes["input-item"]}
                id="expend"
                placeholder="원..."
                type="number"
                {...register("expend")}
              />
            </div>
            <div className={classes["container-textarea"]}>
              <label id="memo" className={classes["label-memo"]}>
                메모
              </label>
              <textarea
                id="memo"
                className={classes["textarea-memo"]}
                {...register("memo")}
              ></textarea>
            </div>
            <Button name="button-submit" text="확인" disabled={false}></Button>
            <Button
              name="button-cancle"
              text="취소"
              clickEvent={modalHandler}
              disabled={false}
            ></Button>
          </form>
          <button className={classes["button-close"]} onClick={modalHandler}>
            <span className="blind">모달창닫기 버튼</span>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AccountForm;
