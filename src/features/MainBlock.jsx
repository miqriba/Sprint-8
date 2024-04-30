import React from "react";
import { expenses, lastWeekExpenses, percentagePoint } from "../data/expenses";
import BarsChart from "./BarsChart";

function MainBlock() {
  return (
    <div
      className="card rounded-4 border-0"
      style={{ width: "100%", boxSizing: "border-box" }}
    >
      <div className="card-body">
        <h5 className="card-title m-1 mb-4 text-start fw-bold">
          Despeses - úlitma setmana
        </h5>
        <BarsChart></BarsChart>
        <div className="d-flex flex-row justify-content-between mt-4">
          <div>
            <p
              style={{ color: "#00000088", fontSize: "11px" }}
              className="fw-bold mb-0 text-start"
            >
              Despeses avui
            </p>
            <h3 className="fw-bold text-start">{`${lastWeekExpenses[6]} €`}</h3>
          </div>
          <div>
            <p className="fw-bold m-0 mt-2 text-end fs-6">{`${percentagePoint}`}</p>
            <p className="fw-bold m-0 text-end" style={{ fontSize: "11px" }}>
              respecte a ahir
            </p>
          </div>
        </div>

        {/* {lastWeekExpenses.map((e, index) => (
          <div key={index}>
            <p>{`${e} €`}</p>
          </div>
        ))} */}
        {/* {expenses.map((e, index) => (
          <div key={index}>
            <p>{`${e.amount}`}</p>
            <p>{`${e.date.toString().split(" ").slice(0, 4).join(" ")}`}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default MainBlock;
