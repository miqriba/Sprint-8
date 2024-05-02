import "bootstrap/dist/css/bootstrap.css";
import { React, useState, useEffect } from "react";
import { MainContext } from "./context/context";
import Languages from "./features/Languages.jsx";
import MainBlock from "./features/MainBlock";
import TotalBalance from "./features/TotalBalance.jsx";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import { expenses } from "./data/expenses.js";
import { getWeekExpenses, getPercentage } from "./data/expenses.js";

const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Castellano" },
  ca: { nativeName: "Català" },
};

function App() {
  const { t, i18n } = useTranslation();

  // Las semanas se cuentan: 1 última semana, 2 penúltima semana...
  const [week, setWeek] = useState(1);
  const [weekExpenses, setWeekExpenses] = useState([]);

  // balanç total
  const [balance, setBalance] = useState();
  // [despesa] i [dia]
  // const [expenses, setExpenses] = useState([[]]);
  // variació % entre avui i ahir
  const [variation, setVariation] = useState();
  // dades de la gràfica
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    setWeekExpenses(getWeekExpenses(expenses, week));
  }, [week]);
  useEffect(() => {
    setVariation(getPercentage(weekExpenses));
  }, [weekExpenses]);

  return (
    <MainContext.Provider
      value={{
        t,
        i18n,
        lngs,
        week,
        setWeek,
        weekExpenses,
        setWeekExpenses,
        variation,
      }}
    >
      <div>
        <Languages></Languages>
        <TotalBalance></TotalBalance>
        <MainBlock></MainBlock>
      </div>
    </MainContext.Provider>
  );
}

export default App;
