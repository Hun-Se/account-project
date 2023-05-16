import React, { useState } from "react";
import ControlDate from "./ControlDate";
import DateBox from "./DateBox";
import type { Holiday } from "../../types/holiday";
import classes from "./CalendarSection.module.css";

const CalendarSection = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickedDate, setClickedDate] = useState<Date>();
  const [holiday, setholiday] = useState<Holiday[]>([]);

  return (
    <>
      <h1 className={classes["main-title"]}>Calendar</h1>
      <div className={classes["container-section"]}>
        <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
        <DateBox
          nowDate={nowDate}
          setNowDate={setNowDate}
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
          holiday={holiday}
        />
      </div>
    </>
  );
};

export default CalendarSection;
