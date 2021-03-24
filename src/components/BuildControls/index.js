import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => (
  <article className={css.BuildControls}>
    <BuildControl
      type="salad"
      orts="Салад"
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
    />
    <BuildControl
      type="bacon"
      orts="Гахайн мах"
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
    />
    <BuildControl
      type="cheese"
      orts="Бяслаг"
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
    />
    <BuildControl
      type="meat"
      orts="Үхриийн мах"
      disabled={props.disabledIngredients}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
    />
  </article>
);

export default BuildControls;
