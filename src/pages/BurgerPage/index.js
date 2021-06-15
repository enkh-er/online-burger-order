import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.module.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import * as actions from "../../redux/actions/burgerActions";

const INGREDIENTS_NAMES = {
  salad: "Салад",
  bacon: "Гахайн мах",
  meat: "Үхрийн мар",
  cheese: "Бяслаг",
};
class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    confirmOrder: false,
  };

  componentDidMount = () => {};

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
    // const order = {
    //   orts: this.props.burgeriinOrts,
    //   dun: this.props.niitUne,
    //   hayag: {
    //     name: "saraa",
    //     city: "ub",
    //     street: "10-r horoolol",
    //   },
    // };
    // this.setState({ loading: true });
    // axios
    //   .post("/orders.json", order)
    //   .then((res) => {
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     this.setState({ loading: false });
    //   });
    const params = [];
    for (let orts in this.state.burgeriinOrts) {
      params.push(orts + "=" + this.props.burgeriinOrts[orts]);
    }
    const query = params.join("&");
    this.props.history.push({
      pathname: "/ship",
      search: query,
    });
    this.closeComfirmModal();
  };
  render() {
    const disabledIngredients = { ...this.props.burgeriinOrts };
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
            price={this.props.niitUne}
            ingredientsNames={INGREDIENTS_NAMES}
            ingredients={this.props.burgeriinOrts}
          />
        </Modal>
        <Burger ingredients={this.props.burgeriinOrts} />
        <BuildControls
          showComfirmModal={this.showComfirmModal}
          ingredientsNames={INGREDIENTS_NAMES}
          disabled={!this.state.purchasing}
          price={this.props.niitUne}
          ortsNemeh={this.props.burgeriinOrtsNemeh}
          ortsHasah={this.props.burgeriinOrtsHasah}
          disabledIngredients={disabledIngredients}
        />
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    niitUne: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    burgeriinOrtsNemeh: (ortsNer) => dispatch(actions.addIngredients(ortsNer)),
    burgeriinOrtsHasah: (ortsNer) =>
      dispatch(actions.removeIngredients(ortsNer)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
