import React from "react";
import css from "./style.module.css";

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <p className={css.Label}>{props.orts}</p>
    <button onClick={() => props.ortsNemeh(props.type)} className={css.Less}>
      Нэмэх
    </button>
    <button
      onClick={() => props.ortsHasah(props.type)}
      className={css.More}
      disabled={props.disabled[props.type]}
    >
      Хасах
    </button>
  </div>
);

export default BuildControl;
