import React from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
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
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    console.log(query);
    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }
    this.setState({
      ingredients,
    });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.push("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <h3>Таны захиалсан бургер</h3>
        <Burger ingredients={this.state.ingredients} />
        <Button
          clicked={this.goBack}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
      </div>
    );
  }
}
