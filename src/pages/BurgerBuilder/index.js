import React, { Component } from "react";
import "./style.module.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({
      ingredients: newIngredients,
    });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      this.setState({
        ingredients: newIngredients,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <section>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
          disabledIngredients={disabledIngredients}
        />
      </section>
    );
  }
}
