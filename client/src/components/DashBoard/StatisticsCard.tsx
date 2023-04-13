import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import StatisticsCardContent from "./StatisticsCardContent";
import classes from "./StatisticsCard.module.css";
import {
  accountGetAsync,
  selectData,
} from "../../redux/account/accountGetSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const StatisticsCard = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);

  useEffect(() => {
    dispatch(accountGetAsync());
  }, [dispatch]);

  // 수입 합계
  const income = data.account
    .map((v) => Number(v.income))
    .reduce((prev, curr) => prev + curr, 0);

  // 지출 합계
  const expend = data.account
    .map((v) => Number(v.expend))
    .reduce((prev, curr) => prev + curr, 0);

  // 총합
  const totalSales = income - expend;

  // 현재달 수입
  const monthIncomeArray = data.account.map((v) => {
    const monthArray = new Date(v.date).getMonth() + 1;
    if (monthArray === new Date().getMonth() + 1) {
      const monthIncome = Number(v.income);
      return monthIncome;
    }
  });
  // 현재달 수입 합계
  let toMonthIncome = 0;
  const sumIncome = monthIncomeArray
    .filter((v) => v !== undefined)
    .forEach(function (el) {
      if (el !== undefined) toMonthIncome += el;
    });

  // 지난달 수입
  const lastmonthIncomeArray = data.account.map((v) => {
    const monthArray = new Date(v.date).getMonth() + 1;
    if (monthArray === new Date().getMonth()) {
      const monthIncome = Number(v.income);
      return monthIncome;
    }
  });
  let lastMonthIncome = 0;
  const sumLastIncome = lastmonthIncomeArray
    .filter((v) => v !== undefined)
    .forEach(function (el) {
      if (el !== undefined) lastMonthIncome += el;
    });

  // 지난달, 현재달 수입 비교
  const percentIncome =
    ((toMonthIncome - lastMonthIncome) / lastMonthIncome) * 100;

  // 현재달 지출 합계
  const monthexpendArray = data.account.map((v) => {
    const monthArray = new Date(v.date).getMonth() + 1;
    if (monthArray === new Date().getMonth() + 1) {
      const monthExpend = Number(v.expend);
      return monthExpend;
    }
  });

  let toMonthExpend = 0;
  const sumExpend = monthexpendArray
    .filter((v) => v !== undefined)
    .forEach(function (el) {
      if (el !== undefined) toMonthExpend += el;
    });

  // 지난달 지출
  const lastmonthExpendArray = data.account.map((v) => {
    const monthArray = new Date(v.date).getMonth() + 1;
    if (monthArray === new Date().getMonth()) {
      const monthExpend = Number(v.expend);
      return monthExpend;
    }
  });
  let lastMonthExpend = 0;
  const sumLastExpend = lastmonthExpendArray
    .filter((v) => v !== undefined)
    .forEach(function (el) {
      if (el !== undefined) lastMonthExpend += el;
    });

  // 지난달, 현재달 지출 비교
  const percentExpend =
    ((toMonthExpend - lastMonthExpend) / lastMonthExpend) * 100;

  //
  const totalMonthSales = toMonthIncome - toMonthExpend;
  const totalLastMonthSales = lastMonthIncome - lastMonthExpend;
  const totalPercent =
    ((totalMonthSales - totalLastMonthSales) / totalLastMonthSales) * 100;

  return (
    <>
      {data !== null && (
        <div className={classes["container-staticscard"]}>
          <Card className="container-statistics">
            <StatisticsCardContent
              title="월 수입"
              statistics={toMonthIncome}
              percent={percentIncome}
            />
          </Card>
          <Card className="container-statistics">
            <StatisticsCardContent
              title="월 지출"
              statistics={toMonthExpend}
              percent={percentExpend}
            />
          </Card>
          <Card className="container-statistics">
            <StatisticsCardContent
              title="월 수입지출 총합"
              statistics={totalMonthSales}
              percent={totalPercent}
            />
          </Card>
          <Card className="container-statistics">
            <h2 className={classes["card-title"]}>전체 수입,지출 총합</h2>
            <p className={classes["card-balance"]}>
              {totalSales.toLocaleString("ko-KR")}원
            </p>
          </Card>
        </div>
      )}
    </>
  );
};

export default StatisticsCard;
