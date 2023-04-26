import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/hooks";
import { accountEditModalShown } from "../../redux/modal/modalSlice";
import { AccountType } from "../../types/account";
import Button from "../Button/Button";
import classes from "./AccountEditList.module.css";
import ROUTES from "../../constant/routes_constant";

interface AccountEditListProps {
  existdata: AccountType;
}

const AccountEditList = (props: AccountEditListProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const existdata = props.existdata;
  const { register, handleSubmit } = useForm<AccountType>();

  const onSubmit: SubmitHandler<AccountType> = (data) => {
    axios
      .patch(
        `${process.env.REACT_APP_DB_HOST}/api/accounts/update/${param.id}`,
        data
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    dispatch(accountEditModalShown());
    navigate(ROUTES.ACCOUNT);
  };

  const modalHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountEditModalShown());
    navigate(ROUTES.ACCOUNT);
  };
  return (
    <>
      {existdata._id === param.id && (
        <div className={classes["container-modal"]}>
          <header className={classes["header-account-modal"]}>
            <h3 className={classes["form-title"]}>목록수정</h3>
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
                defaultValue={existdata.date}
                className={classes["input-date"]}
                {...register("date")}
              />
            </div>
            <div>
              <label htmlFor="item">항목</label>
              <input
                className={classes["input-item"]}
                id="item"
                defaultValue={existdata.item}
                type="text"
                {...register("item")}
              />
            </div>
            <div>
              <label htmlFor="income">수입</label>
              <input
                className={classes["input-income"]}
                id="income"
                defaultValue={existdata.income}
                type="number"
                {...register("income")}
              />
            </div>
            <div>
              <label htmlFor="expend">지출</label>
              <input
                className={classes["input-item"]}
                id="expend"
                defaultValue={existdata.expend}
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
                defaultValue={existdata.memo}
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
      )}
    </>
  );
};

export default AccountEditList;
