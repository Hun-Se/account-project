import React from "react";
import StatisticsCard from "./DashBoard/StatisticsCard";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <>
      <h1 className={classes["body-title"]}>Dashboards</h1>
      <StatisticsCard></StatisticsCard>
    </>
  );
};

export default Body;
