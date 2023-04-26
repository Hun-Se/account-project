import React from "react";
import classes from "./PaginationButton.module.css";

interface Props {
  className: string;
  onClick: () => {};
  disabled: boolean;
  children: string;
}

const PaginationButton = (props: Props) => {
  return (
    <>
      <button
        className={classes[props.className]}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};

export default PaginationButton;
