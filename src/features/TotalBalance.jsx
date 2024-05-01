import { React, useState, useEffect, useContext } from "react";
import { MainContext } from "../context/context";
import { expenses } from "../data/expenses";

function TotalBalance() {
  const [totalBalance, setTotalBalance] = useState();

  const { t } = useContext(MainContext);

  useEffect(() => {
    let total = 0;
    total = expenses.reduce((a, b) => a + b.amount, total);
    setTotalBalance(total);
  });
  return (
    <div
      className="card p-3 d-flex flex-row justify-content-between mb-4 rounded-4 border-0"
      style={{ width: "100%", backgroundColor: "#EC755C", color: "white" }}
    >
      <div className="align-self-center text-start">
        <p
          style={{ color: "#ffffff88", fontSize: "11px" }}
          className="fw-bold mb-0"
        >
          {t("description.balance")}
        </p>
        <p className="fw-bold m-0 fs-4">{`${totalBalance} €`}</p>
      </div>
      <div className="justify-self-end">
        <button
          className="rounded-circle m-2 justify-self-end"
          style={{ width: "50px", height: "50px", backgroundColor: "#EC755C" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>
        <button
          className="rounded-circle justify-self-end"
          style={{ width: "50px", height: "50px", backgroundColor: "#EC755C" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TotalBalance;
