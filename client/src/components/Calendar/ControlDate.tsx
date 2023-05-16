import React, { useEffect } from "react";
import classes from "./ControlDate.module.css";

interface Props {
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ControlDate = ({ nowDate, setNowDate }: Props) => {
  const changeYear = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setFullYear(date.getFullYear() + change);
    setNowDate(date);
  };

  const chagneMonth = (change: number) => {
    const date = new Date(nowDate.getTime());
    date.setMonth(date.getMonth() + change);
    setNowDate(date);
  };

  return (
    <div className={classes["container-btnlist"]}>
      <div className={classes["container-btn"]}>
        <button onClick={() => changeYear(-1)}>{`<<연`}</button>
        <button onClick={() => chagneMonth(-1)}>{`<월`}</button>
      </div>
      <h1>{`${nowDate.getFullYear()}.${nowDate.getMonth() + 1}`}</h1>
      <div className={classes["container-btn"]}>
        <button onClick={() => chagneMonth(+1)}>{`월>`}</button>
        <button onClick={() => changeYear(+1)}>{`연>>`}</button>
      </div>
    </div>
  );
};

export default ControlDate;
