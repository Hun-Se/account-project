import React from "react";
import Router from "./router/router";
import classes from "./App.module.css";
import "./styles/color.css";
import "./styles/reset.css";
import "./styles/blind.css";

function App() {
  return (
    <div className={classes["App"]}>
      <Router />
    </div>
  );
}

export default App;
