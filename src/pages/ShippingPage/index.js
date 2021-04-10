import React, { Component } from "react";
import Burger from "../../components/Burger";
import css from "./style.module.css";

export default class ShippingPage extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 1,
      meat: 2,
    },
  };
  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
      </div>
    );
  }
}
