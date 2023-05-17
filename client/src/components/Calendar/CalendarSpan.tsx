import React from "react";

interface CalenderSpanProps {
  title: string;
  income: string;
  expend: string;
}

const CalendarSpan = (props: CalenderSpanProps) => {
  return (
    <>
      <span>{props.title}</span>
      <span>+{props.income ? props.income : 0}</span>
      <span>-{props.expend ? props.expend : 0}</span>
      <br></br>
    </>
  );
};

export default CalendarSpan;
