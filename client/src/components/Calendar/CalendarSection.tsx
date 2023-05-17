import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountGetAsync,
  selectData,
} from "../../redux/account/accountGetSlice";
import ControlDate from "./ControlDate";
import DateBox from "./DateBox";
import type { Holiday } from "../../types/holiday";
import classes from "./CalendarSection.module.css";

const CalendarSection = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickedDate, setClickedDate] = useState<Date>();
  const [holiday, setholiday] = useState<Holiday[]>([]);

  const dispatch = useAppDispatch();
  const accountData = useAppSelector(selectData);
  const requestData = {
    url: `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?`,
    serviceKey: process.env.REACT_APP_SERVICE_KEY,
    solYear: 2023,
    solMonth: 5,
  };

  const getHoliday = async () => {
    const bodyData = {
      ...requestData,
      solYear: nowDate.getFullYear(),
      solMonth: nowDate.getMonth() + 1,
    };

    const api = `${bodyData.url}serviceKey=${
      bodyData.serviceKey
    }&solYear=${String(bodyData.solYear)}&solMonth=${String(
      bodyData.solMonth < 10 ? "0" + bodyData.solMonth : bodyData.solMonth
    )}`;

    const response = await axios.get(api);

    const saveData = [].concat(response.data.response.body.items.item);
    setholiday(saveData);
  };

  useEffect(() => {
    getHoliday();
    dispatch(accountGetAsync);
  }, [nowDate]);

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
          account={accountData.account}
        />
      </div>
    </>
  );
};

export default CalendarSection;
