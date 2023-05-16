import React from "react";
import classes from "./WeekBox.module.css";

interface Props {
  weekName: string;
}

const WeekBox = ({ weekName }: Props) => {
  return (
    <div className={classes["container-week"]}>
      <p>{weekName}</p>
    </div>
  );
};

export default WeekBox;
