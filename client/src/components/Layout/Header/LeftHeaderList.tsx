import InputSearch from "../../Input/InputSearch";
import classes from "./LeftHeaderList.module.css";

const LeftHeaderList = () => {
  return (
    <>
      <div className={classes["container-header-left"]}>
        <div className={classes["header-search"]}>
          <InputSearch></InputSearch>
        </div>
      </div>
    </>
  );
};

export default LeftHeaderList;
