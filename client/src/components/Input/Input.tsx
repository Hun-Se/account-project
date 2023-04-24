import React from "react";
import classes from "./Input.module.css";

interface InputProps {
  id: number;
  className: string;
  name: string;
  title: string;
  placeholder: string;
  type: string;
}

const Input = (props: InputProps) => {
  return (
    <>
      <div className={classes["container-input"]}>
        <label htmlFor={props.name}>{props.title}</label>
        <input
          className={classes[`${props.className}`]}
          id={props.name}
          placeholder={props.placeholder}
          type={props.type}
        />
      </div>
    </>
  );
};

export default Input;
