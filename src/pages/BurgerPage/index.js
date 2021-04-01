import React, { Component } from "react";
import "./style.module.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENTS_PRICE = { salad: 700, cheese: 300, bacon: 1000, meat: 800 };
const INGREDIENTS_NAMES = {
  salad: "Салад",
  bacon: "Гахайн мах",
  meat: "Үхрийн мар",
  cheese: "Бяслаг",
};
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 2500,
    purchasing: false,
    confirmOrder: false,
  };

  showComfirmModal = () => {
    this.setState({
      confirmOrder: true,
    });
  };

  closeComfirmModal = () => {
    this.setState({
      confirmOrder: false,
    });
  };

  continueOrder = () => {
    console.log("continue daragdlaa....");
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients,
      purchasing: true,
    });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
      this.setState({
        purchasing: newPrice > 2500 ? true : false,
        totalPrice: newPrice,
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
        <Modal
          show={this.state.confirmOrder}
          closeComfirmModal={this.closeComfirmModal}
        >
          <OrderSummary
            onCancel={this.closeComfirmModal}
            onContinue={this.continueOrder}
            price={this.state.totalPrice}
            ingredientsNames={INGREDIENTS_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          showComfirmModal={this.showComfirmModal}
          ingredientsNames={INGREDIENTS_NAMES}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
          disabledIngredients={disabledIngredients}
        />
      </section>
    );
  }
}