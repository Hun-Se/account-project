import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import classes from "Modal.module.css";

interface ModalProps {
  children: JSX.Element;
}

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
