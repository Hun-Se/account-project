import React from "react";
import classes from "./Card.module.css";

interface PropsCard {
  className: string;
  children: React.ReactNode;
}

const Card = (props: PropsCard) => {
  return (
    <>
      <div
        className={`${classes["container-card"]} ${
          classes[`${props.className}`]
        }`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Card;
