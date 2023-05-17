import React from "react";
import CalendarSpan from "./CalendarSpan";
import classes from "./AllDay.module.css";
import { AccountType } from "../../types/account";

interface Props {
  day: Date;
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  isHoliday: boolean;
  holidayName: (string | 0)[];
  account: (undefined | AccountType)[];
}

const allDay = ({
  day,
  nowDate,
  setNowDate,
  clickedDate,
  setClickedDate,
  isHoliday,
  holidayName,
  account,
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
    <>
      <div className={classes["container-days"]} onClick={() => clickDate()}>
        <p
          className={`
          ${classes["par-days"]}
          ${sameMonth ? classes["par-sameMonth"] : classes} 
          ${clickDay ? classes["par-cliked"] : classes} 
          ${isHoliday ? classes["par-holiday"] : classes} 
          ${sameDay ? classes["par-sameDay"] : classes}
          `}
        >
          {String(day.getMonth() + 1) + "/" + day.getDate()}&nbsp;
          {holidayName}
        </p>
        <div className={classes["container-account-data"]}>
          {account.map((v) => {
            if (v) {
              return (
                <CalendarSpan
                  key={v._id}
                  title={v.item}
                  income={v.income}
                  expend={v.expend}
                ></CalendarSpan>
              );
            }
            return undefined;
          })}
        </div>
      </div>
    </>
  );
};

export default allDay;
