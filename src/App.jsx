import "bootstrap/dist/css/bootstrap.css";
import { React, useState } from "react";
import { MainContext } from "./context/context";
import { expenses } from "./data/expenses";
import MainBlock from "./features/MainBlock";
import TotalBalance from "./features/TotalBalance.jsx";
import BarsChart from "./features/BarsChart.jsx";
import "./App.css";

function App() {
  // balanç total
  const [balance, setBalance] = useState();
  // [despesa] i [dia]
  const [expenses, setExpenses] = useState([[]]);
  // variació % entre avui i ahir
  const [variation, setVariation] = useState();
  // dades de la gràfica
  const [graphData, setGraphData] = useState();

  return (
    <MainContext.Provider value={{}}>
      <div>
        <TotalBalance></TotalBalance>
        <MainBlock></MainBlock>
      </div>
    </MainContext.Provider>
  );
}

export default App;
