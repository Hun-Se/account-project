import React from "react";
import StatisticsCard from "./StatisticsCard";
import GraphCard from "./GraphCard";
import classes from "./DashBoardSection.module.css";

const DashBoardSection = () => {
  return (
    <>
      <h1 className={classes["body-title"]}>Dashboards</h1>
      <StatisticsCard />
      <GraphCard />
    </>
  );
};

export default DashBoardSection;
