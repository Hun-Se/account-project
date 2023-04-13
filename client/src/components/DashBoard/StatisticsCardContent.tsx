import React from "react";
import classes from "./StatisticsCardContent.module.css";

interface StatisticsCardContentProps {
  title: string;
  statistics: number;
  percent: number;
}

const StatisticsCardContent = (props: StatisticsCardContentProps) => {
  return (
    <>
      <h2 className={classes["card-title"]}>{props.title}</h2>
      <p className={classes["card-balance"]}>
        {props.statistics.toLocaleString("ko-KR")}원
      </p>
      <p className={classes["card-ratio"]}>
        지난달 대비
        {props.percent > 0 ? (
          <span className={classes["ratio-percent-plus"]}>
            +{props.percent !== Infinity ? props.percent.toFixed(2) : 0}%
          </span>
        ) : (
          <span className={classes["ratio-percent-minus"]}>
            {props.percent !== Infinity ? props.percent.toFixed(2) : 0}%
          </span>
        )}
      </p>
    </>
  );
};

export default StatisticsCardContent;
