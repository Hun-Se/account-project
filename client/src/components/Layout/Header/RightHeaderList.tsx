import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RightHaederList.module.css";

const HeaderRight = () => {
  const [isshown, setIsshown] = useState(false);
  const navigate = useNavigate();

  const settingSelect = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsshown(!isshown);
  };

  const logoutHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const result = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (result) {
      setIsshown(!isshown);
      localStorage.removeItem("token");
      navigate("/auth/login");
    }
  };

  return (
    <ul className={classes["header-list"]}>
      <li className={classes["list-dark"]}></li>
      <li className={classes["list-alram"]}></li>
      <li className={classes["list-setting"]} onClick={settingSelect}>
        {isshown && (
          <ul className={classes["dropdown-list"]}>
            <li onClick={logoutHandler}>로그아웃</li>
          </ul>
        )}
      </li>
      <li className={classes["list-profile"]}></li>
    </ul>
  );
};

export default HeaderRight;
