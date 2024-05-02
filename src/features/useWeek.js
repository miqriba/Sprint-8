import { React, useContext } from "react";
import { MainContext } from "../context/context";
import { expenses } from "../data/expenses";

export function useWeek() {
  const { week, setWeek } = useContext(MainContext);
  const lastWeekExpenses = expenses
    .filter((e) => e.amount !== 1500)
    .slice(-7 * week)
    .map((e) => -e.amount);

  return { lastWeekExpenses };
}
