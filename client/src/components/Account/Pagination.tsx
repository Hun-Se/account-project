import React from "react";
import PaginationButton from "../Button/PaginationButton";
import classes from "./Pagination.module.css";

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: any;
}

const Pagination = (props: PaginationProps) => {
  const numPages = Math.ceil(props.total / props.limit);
  return (
    <>
      <PaginationButton
        className={"button-prev"}
        onClick={() => props.setPage(props.page - 1)}
        disabled={props.page === 1}
      >
        &lt;
      </PaginationButton>
      {Array(numPages)
        .fill(undefined)
        .map((_, i) => (
          <PaginationButton
            className={
              props.page === i + 1 ? "button-number-cliked" : "button-number"
            }
            key={i + 1}
            onClick={() => props.setPage(i + 1)}
            aria-current={props.page === i + 1 ? "page" : null}
            disabled={false}
          >
            {String(i + 1)}
          </PaginationButton>
        ))}
      <PaginationButton
        className={"button-next"}
        onClick={() => props.setPage(props.page + 1)}
        disabled={props.page === numPages}
      >
        &gt;
      </PaginationButton>
    </>
  );
};

export default Pagination;
