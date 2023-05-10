import React from "react";
import classes from "./Calendar.module.css";
import Header from "../Layout/Header/Header";
import Aside from "../Layout/Aside/Aside";
import CalendarSection from "./CalendarSection";

const Calendar = () => {
  return (
    <>
      <div className={classes["container-app"]}>
        <Aside />
        <main className={classes["container-main"]}>
          <Header />
          <CalendarSection />
        </main>
      </div>
    </>
  );
};

export default Calendar;
