import React, { Component } from "react";
import css from "./style.module.css";

const Order = (props) => (
  <div className={css.Order}>
    <p>
      Орц : Гахайн мах : {props.order.orts.bacon}, Салад :
      {props.order.orts.salad}, БяслагД {props.order.orts.cheese},Үхрийн мах:
      {props.order.orts.meat}
    </p>
    <p>
      Хаяг : {props.order.hayag.name} , {props.order.hayag.city} ,
      {props.order.hayag.street}
    </p>
    <p>
      Үнийн дүн : <strong>{props.order.dun}</strong>
    </p>
  </div>
);

export default Order;
