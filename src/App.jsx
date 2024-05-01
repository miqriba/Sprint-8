import "bootstrap/dist/css/bootstrap.css";
import { React, useState } from "react";
import { MainContext } from "./context/context";
import Languages from "./features/Languages.jsx";
import MainBlock from "./features/MainBlock";
import TotalBalance from "./features/TotalBalance.jsx";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Castellano" },
  ca: { nativeName: "Català" },
};

function App() {
  const { t, i18n } = useTranslation();

  // balanç total
  const [balance, setBalance] = useState();
  // [despesa] i [dia]
  const [expenses, setExpenses] = useState([[]]);
  // variació % entre avui i ahir
  const [variation, setVariation] = useState();
  // dades de la gràfica
  const [graphData, setGraphData] = useState();

  return (
    <MainContext.Provider value={{ t, i18n, lngs }}>
      <div>
        <Languages></Languages>
        <TotalBalance></TotalBalance>
        <MainBlock></MainBlock>
      </div>
    </MainContext.Provider>
  );
}

export default App;
