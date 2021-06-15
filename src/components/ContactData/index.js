import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";

class ContactData extends React.Component {
  state = {
    dun: 0,
    hayag: {
      name: null,
      city: null,
      street: null,
    },
  };
  render() {
    return (
      <div>
        <input type="text" name="name" placeholder="Таны нэр" />
        <input type="text" name="street" placeholder="Таны гэрийн хаяг" />
        <input type="text" name="city" placeholder="Таны хот" />
        <Button btnType="Success" text="ИЛГЭЭХ" />
      </div>
    );
  }
}

export default ContactData;
