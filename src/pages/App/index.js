import React from "react";
import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";
import "./style.css";

function App() {
  return (
    <div>
      <Toolbar />
      <main className="Content">
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
