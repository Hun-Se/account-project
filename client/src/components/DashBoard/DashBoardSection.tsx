import React, { useState, useCallback, useEffect } from "react";
import {
  accountGetAsync,
  selectData,
} from "../../redux/account/accountGetSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import StatisticsCard from "./StatisticsCard";
import GraphCard from "./GraphCard";
import classes from "./DashBoardSection.module.css";

const DashBoardSection = () => {
  const [, updateState] = useState({});
  const forceupdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceupdate();
  }, []);

  return (
    <>
      <h1 className={classes["body-title"]}>Dashboards</h1>
      <StatisticsCard />
      <GraphCard />
    </>
  );
};

export default DashBoardSection;
