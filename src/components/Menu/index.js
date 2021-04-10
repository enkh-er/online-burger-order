import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = () => (
  <ul className={css.Menu}>
    <MenuItem link="/" exact>
      Шинэ захиалга
    </MenuItem>
    <MenuItem link="/orders">Захиалганууд</MenuItem>
    <MenuItem link="/login">Нэвтрэх</MenuItem>
  </ul>
);

export default Menu;
