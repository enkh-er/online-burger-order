import React from "react";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

export default class OrderPage extends React.Component {
  state = {
    order: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((res) => {
        this.setState({
          order: Object.entries(res.data).reverse(),
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    console.log(this.state.order);
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.order.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}
