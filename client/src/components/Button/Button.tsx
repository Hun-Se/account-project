import React from "react";
import classes from "./Button.module.css";

interface Props {
  name: string;
  text: string;
  clickEvent?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  return (
    <button className={classes[props.name]} onClick={props.clickEvent}>
      {props.text}
    </button>
  );
};

export default Button;
