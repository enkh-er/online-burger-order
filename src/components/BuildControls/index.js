import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <article className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.price}</strong>
      </p>
      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          type={el}
          orts={props.ingredientsNames[el]}
          disabled={props.disabledIngredients}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
        />
      ))}
      <button
        className={css.OrderButton}
        disabled={props.disabled}
        onClick={props.showComfirmModal}
      >
        ЗАХИАЛАХ
      </button>
    </article>
  );
};

export default BuildControls;
