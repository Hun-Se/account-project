import React from "react";
import WeekBox from "./WeekBox";
import AllDay from "./AllDay";
import { Holiday } from "../../types/holiday";
import { AccountType } from "../../types/account";
import classes from "./DateBox.module.css";

interface DateBoxProps {
  nowDate: Date;
  setNowDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date | undefined;
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  holiday: Holiday[];
  account: AccountType[];
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
  const holiday = props.holiday.map((data: Holiday) => {
    const holidayLocDate = String(data?.locdate);
    const holidayName = data?.dateName;
    return { holidayLocDate, holidayName };
  });

  return (
    <>
      <div className={classes["container-week"]}>
        {weeks.map((week) => {
          return <WeekBox key={week} weekName={week} />;
        })}
      </div>
      <div className={classes["container-date"]}>
        {allDay.map((day: Date) => {
          const yyyymmdd = dateToyyyymmdd(day);
          const todayIsHoliday = holiday
            .map((v) => v.holidayLocDate)
            .indexOf(yyyymmdd);

          const isHoliday = todayIsHoliday === -1 ? false : true;
          const todayHolidayName = holiday.map(function (v) {
            if (v.holidayLocDate === yyyymmdd) {
              return v.holidayName;
            }
            return "";
          });

          const account = props.account.map(function (v) {
            if (v.date.replace(/\-/g, "") === String(yyyymmdd)) {
              return v;
            }
            return undefined;
          });

          return (
            <AllDay
              key={day.getTime()}
              day={day}
              nowDate={props.nowDate}
              setNowDate={props.setNowDate}
              clickedDate={props.clickedDate}
              setClickedDate={props.setClickedDate}
              isHoliday={isHoliday}
              holidayName={todayHolidayName}
              account={account}
            />
          );
        })}
      </div>
    </>
  );
};

export default DateBox;
