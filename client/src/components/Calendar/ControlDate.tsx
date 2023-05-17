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
        <button onClick={() => changeYear(-1)}>{`<< 작년`}</button>
      </div>
      <button onClick={() => chagneMonth(-1)}>{`< 이전월`}</button>
      <h1>{`${nowDate.getFullYear()}.${nowDate.getMonth() + 1}`}</h1>
      <button onClick={() => chagneMonth(+1)}>{`다음달 >`}</button>
      <div className={classes["container-btn"]}>
        <button onClick={() => changeYear(+1)}>{`내년 >>`}</button>
      </div>
    </div>
  );
};

export default ControlDate;
