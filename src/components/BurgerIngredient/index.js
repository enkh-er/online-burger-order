import React from "react";

import css from "./style.module.css";

const BurgerIngredient = (props) => {
  switch (props.type) {
    case "salad":
      return <div className={css.Salad}></div>;
    case "bacon":
      return <div className={css.Bacon}></div>;
    case "meat":
      return <div className={css.Meat}></div>;
    case "cheese":
      return <div className={css.Cheese}></div>;
    case "bread-bottom":
      return <div className={css.BreadBottom}></div>;
    case "bread-top":
      return (
        <div className={css.BreadTop}>
          <div className={css.Seed}></div>
          <div className={`${css.Seed} ${css.Second}`}></div>
          <div className={`${css.Seed} ${css.Third}`}></div>
          <div className={`${css.Seed} ${css.Fourth}`}></div>
          <div className={`${css.Seed} ${css.Fifth}`}></div>
        </div>
      );
    default:
      return <div></div>;
  }
};

export default BurgerIngredient;
