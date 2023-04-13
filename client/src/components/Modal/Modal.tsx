import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import classes from "Modal.module.css";

interface ModalProps {
  children: JSX.Element;
  onClose: (event: React.MouseEvent) => void;
}

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
