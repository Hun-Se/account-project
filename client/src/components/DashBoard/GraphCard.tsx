import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  accountGetAsync,
  selectData,
} from "../../redux/account/accountGetSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import classes from "./GraphCard.module.css";

const GraphCard = () => {
  const dispatch = useAppDispatch();
  const accountData = useAppSelector(selectData);

  useEffect(() => {
    dispatch(accountGetAsync());
  }, [dispatch]);

  // 월별 총액
  const monthTotal = accountData.account.map((v) => {
    const monthArray = [
      new Date(v.date).getMonth() + 1,
      Number(v.income) - Number(v.expend),
    ];
    return monthArray;
  });

  const monthTotalArr = [];

  for (let i = 1; i < 13; i++) {
    let total = 0;
    monthTotal
      .filter((v) => v[0] === i)
      .forEach(function (v) {
        total += v[1];
      });
    monthTotalArr.push(total);
  }

  // 지출 목록 별 총액
  const itemList = accountData.account
    .map((v) => {
      if (v.expend !== undefined && v.expend !== "") {
        const arr = [v.item, Number(v.expend)];
        return arr;
      }
      return 0;
    })
    .filter((v) => v);

  const sumByKey = (itemList: any, items: string[]) => {
    const sums: any = {};
    for (let i = 0; i < itemList.length; i++) {
      const key = itemList[i][0];
      const value = itemList[i][1];
      if (items.includes(key)) {
        if (!sums[key]) {
          sums[key] = 0;
        }
        sums[key] += value;
      }
    }
    return sums;
  };

  const sum = sumByKey(
    itemList,
    accountData.account.map((v) => v.item)
  );

  const labelsDounuts = Object.keys(sum);
  const dataDounuts = Object.values(sum);

  //차트
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ArcElement);
  const options = {
    responsive: true,
  };

  const labelsBar = [
    "01월",
    "02월",
    "03월",
    "04월",
    "05월",
    "06월",
    "07월",
    "08월",
    "09월",
    "10월",
    "11월",
    "12월",
  ];
  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        label: "월별 매출 총액",
        data: monthTotalArr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataDonuts = {
    labels: labelsDounuts,
    datasets: [
      {
        label: "지출 총액",
        data: dataDounuts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className={classes["container-graph"]}>
        <div className={classes["container-bar"]}>
          <h2 className={classes["title-monthtotal"]}>월별 매출</h2>
          <Bar options={options} data={dataBar}></Bar>
        </div>
        <div className={classes["container-donuts"]}>
          <h2 className={classes["title-expend"]}>지출 목록</h2>
          <Doughnut options={options} data={dataDonuts}></Doughnut>
        </div>
      </div>
    </>
  );
};

export default GraphCard;
