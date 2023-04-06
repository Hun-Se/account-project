import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectModal, modalShown } from "../../redux/modal/modalSlice";

import classes from "./Backdrop.module.css";

const Backdrop = () => {
  const dispatch = useAppDispatch();
  const modalsown = useAppSelector(selectModal);

  const modalHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(modalShown());
  };

  return <div className={classes.backdrop} onClick={modalHandler}></div>;
};

export default Backdrop;
