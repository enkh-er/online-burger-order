import React from "react";
import SideBar from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import css from "./style.module.css";

function App() {
  return (
    <div>
      <Toolbar />
      <SideBar />
      <main className={css.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
