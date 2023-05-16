import React from "react";
import WeekBox from "./WeekBox";
import AllDay from "./AllDay";
import { Holiday } from "../../types/holiday";
import classes from "./DateBox.module.css";

interface DateBoxProps {
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  holiday: Holiday[];
}

const dateToyyyymmdd = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};

const monthList = (nowDate: Date) => {
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();

  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
  const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();

  const result: Date[] = [];
  const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
  const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();

  for (let i = dayOneWeek - 1; i >= 0; i--) {
    result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
  }

  for (let i = 1; i <= nowMonthEnd; i++) {
    result.push(new Date(nowYear, nowMonth, i));
  }

  for (let i = 1; i < 7 - dayLastWeek; i++) {
    result.push(new Date(nowYear, nowMonth + 1, i));
  }

  return result;
};

const DateBox = (props: DateBoxProps) => {
  const allDay: Date[] = monthList(props.nowDate);
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const holidayLocDate = props.holiday.map((data: Holiday) => {
    return String(data?.locdate);
  });

  return (
    <div className={classes["container-date"]}>
      {weeks.map((week) => {
        return <WeekBox key={week} weekName={week} />;
      })}
      {allDay.map((day: Date) => {
        const yyyymmdd = dateToyyyymmdd(day);
        const todayIsHoliday = holidayLocDate.indexOf(yyyymmdd);
        const isHoliday = todayIsHoliday === -1 ? false : true;

        return (
          <AllDay
            key={day.getTime()}
            day={day}
            nowDate={props.nowDate}
            setNowDate={props.setNowDate}
            clickedDate={props.clickedDate}
            setClickedDate={props.setClickedDate}
            isHoliday={isHoliday}
          />
        );
      })}
    </div>
  );
};

export default DateBox;
