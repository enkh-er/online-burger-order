import React from "react";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import css from "./style.module.css";

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
