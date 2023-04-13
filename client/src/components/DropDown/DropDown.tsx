import React from "react";
import classes from "./DropDown.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  showlist,
  selectDropDownShown,
} from "../../redux/dropdown/dropdownSlice";

interface DropDownProps {
  itemList: { id: number; name: string }[];
}

const DropDown = (props: DropDownProps) => {
  const dropdownList = props.itemList.map((list) => (
    <div className={classes["list-dropdown"]} key={list.id}>
      {list.name}
    </div>
  ));

  const isshown = useAppSelector(selectDropDownShown);
  const dispatch = useAppDispatch();

  const dropDownEventHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(showlist());
  };

  return (
    <>
      <div className={classes["dropdown"]}>
        <button
          className={classes["button-dropdown"]}
          onClick={dropDownEventHandler}
        >
          <span className={classes["dropbtn_icon"]}></span>
          <span className={classes["dropdown-category"]}>등록순</span>
          <span className={classes["dropdown-title"]}>정렬</span>
        </button>
        {isshown && (
          <ul className={classes["dropdown-list"]}>{dropdownList}</ul>
        )}
      </div>
    </>
  );
};

export default DropDown;
