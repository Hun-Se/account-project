import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountGetByIdAsync,
  selectIdData,
} from "../../redux/account/accountGetByIdSlice";
import { accountEditModalShown } from "../../redux/modal/modalSlice";
import AccountEditList from "./AccountEditList";
import Modal from "../Modal/Modal";
import ROUTES from "../../constant/routes_constant";

const AccountEdit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const existdata = useAppSelector(selectIdData);
  const param = useParams();

  useEffect(() => {
    if (typeof param.id === "string") {
      dispatch(accountGetByIdAsync(param.id));
    }
  }, [dispatch, param.id]);

  const modalHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(accountEditModalShown());
    navigate(ROUTES.ACCOUNT);
  };

  return (
    <>
      <Modal onClose={modalHandler}>
        <AccountEditList existdata={existdata.data}></AccountEditList>
      </Modal>
    </>
  );
};

export default AccountEdit;
