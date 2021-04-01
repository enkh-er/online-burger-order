import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";

const OrderSummary = (props) => {
  return (
    <section>
      <header>
        <h2>Таны захиалга</h2>
      </header>
      <main>
        <p>Таны захиалсан орцууд:</p>
        <ul>
          {Object.keys(props.ingredients).map((el) => (
            <li key={el}>
              {props.ingredientsNames[el]} : {props.ingredients[el]}
            </li>
          ))}
        </ul>
        <p>
          <strong>Үнийн дүн: {props.price}₮</strong>
        </p>
        <p>Цааш үргэлжлүүлэх үү?</p>
        <Button clicked={props.onCancel} btnType="Danger" text="Татгалзах" />
        <Button
          clicked={props.onContinue}
          btnType="Success"
          text="Үргэлжлүүлэх"
        />
      </main>
    </section>
  );
};

export default OrderSummary;
