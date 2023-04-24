import React, { useState } from "react";
import classes from "./DropDown.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectData } from "../../redux/account/accountGetSlice";
import {
  showlist,
  selectDropDown,
  sortData,
} from "../../redux/dropdown/dropdownSlice";

interface DropDownProps {
  itemList: { id: number; name: string }[];
}

const DropDown = (props: DropDownProps) => {
  const [sortName, setSortName] = useState("등록순");
  const dispatch = useAppDispatch();
  const dropdown = useAppSelector(selectDropDown);
  const { account } = useAppSelector(selectData);

  const dropDownEventHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(showlist());
  };

  const selectItemHandler = (item: string) => {
    dispatch(showlist());
    setSortName(item);
    dispatch(sortData({ account, item }));
  };

  const dropdownList = props.itemList.map((list) => (
    <li
      className={classes["list-dropdown"]}
      key={list.id}
      onClick={() => selectItemHandler(list.name)}
    >
      {list.name}
    </li>
  ));

  return (
    <>
      <div className={classes["dropdown"]}>
        <button
          className={classes["button-dropdown"]}
          onClick={dropDownEventHandler}
        >
          <span className={classes["dropbtn_icon"]}></span>
          <span className={classes["dropdown-category"]}>{sortName}</span>
          <span className={classes["dropdown-title"]}>정렬</span>
        </button>
        {dropdown.isShown && (
          <ul className={classes["dropdown-list"]}>{dropdownList}</ul>
        )}
      </div>
    </>
  );
};

export default DropDown;
