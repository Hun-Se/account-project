import React from "react";
import classes from "./AllDay.module.css";

interface Props {
  day: Date;
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  isHoliday: boolean;
}

const allDay = ({
  day,
  nowDate,
  setNowDate,
  clickedDate,
  setClickedDate,
  isHoliday,
}: Props) => {
  const nowTime = new Date();

  const sameMonth = nowDate.getMonth() === day.getMonth();
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();

  const clickDay: boolean = clickedDate
    ? clickedDate.getFullYear() === day.getFullYear() &&
      clickedDate.getMonth() === day.getMonth() &&
      clickedDate.getDate() === day.getDate()
    : false;

  const clickDate = () => {
    setClickedDate(day);
  };

  return (
    <div className={classes["container-days"]} onClick={() => clickDate()}>
      <p
        className={`${sameMonth ? classes["par-sameMonth"] : classes} ${
          clickedDate ? classes["par-cliked"] : classes
        } ${isHoliday ? classes["par-holiday"] : classes} `}
      >
        {day.getDate()}
      </p>
    </div>
  );
};

export default allDay;
