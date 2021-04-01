import React from "react";
import css from "./style.module.css";

const Shadow = (props) => {
  return props.show ? <div className={css.Shadow}  onClick={props.closeComfirmModal}></div> : null;
};

export default Shadow;
