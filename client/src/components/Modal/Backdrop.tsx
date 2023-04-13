import { useAppDispatch } from "../../app/hooks";

import classes from "./Backdrop.module.css";

interface BackdropProps {
  onClose: (event: React.MouseEvent) => void;
}

const Backdrop = (props: BackdropProps) => {
  const dispatch = useAppDispatch();

  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

export default Backdrop;
