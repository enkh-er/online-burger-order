import React from "react";
import css from "./style.module.css";

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <label className={css.Label}>{props.orts}</label>

    <button
      onClick={() => props.ortsHasah(props.type)}
      className={css.More}
      disabled={props.disabled[props.type]}
    >
      Хасах
    </button>
    <button onClick={() => props.ortsNemeh(props.type)} className={css.Less}>
      Нэмэх
    </button>
  </div>
);

export default BuildControl;
