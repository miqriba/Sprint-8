import { React, useContext } from "react";
import {
  getWeekExpenses,
  lastWeekExpenses,
  percentagePoint,
} from "../data/expenses";
import { MainContext } from "../context/context";
import BarsChart from "./BarsChart";

function MainBlock() {
  const { t, week, weekExpenses, variation } = useContext(MainContext);

  return (
    <div
      className="card rounded-4 border-0"
      style={{ width: "100%", boxSizing: "border-box" }}
    >
      <div className="card-body">
        <h5 className="card-title m-1 mb-4 text-start fw-bold">
          {week === 1
            ? t("description.week")
            : t("description.week2") + week + t("description.week3")}
        </h5>
        <BarsChart></BarsChart>
        <div className="d-flex flex-row justify-content-between mt-4">
          <div>
            <p
              style={{ color: "#00000088", fontSize: "11px" }}
              className="fw-bold mb-0 text-start"
            >
              {t("description.today")}
            </p>
            <h3 className="fw-bold text-start">{`${weekExpenses[6]} €`}</h3>
          </div>
          <div>
            <p className="fw-bold m-0 mt-2 text-end fs-6">{`${variation}`}</p>
            <p className="fw-bold m-0 text-end" style={{ fontSize: "11px" }}>
              {t("description.percentage")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
