import { Bar } from "react-chartjs-2";
import { lastWeekExpenses } from "../data/expenses";
import { MainContext } from "../context/context";
import { React, useContext } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function BarsChart() {
  const dies = ["dl", "dm", "dc", "dj", "dv", "ds", "dg"];

  const { weekExpenses } = useContext(MainContext);

  let myoptions = {
    responsive: true,
    animation: true,
    borderRadius: 2,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            weight: "bold",
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: Math.max(...weekExpenses),
        grid: {
          display: true,
        },
        border: {
          dash: [2, 4],
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          dash: [2, 4],
        },
        // ticks: { color: "rgba(0, 220, 195)" },
      },
    },
  };

  let mydata = {
    labels: dies,
    datasets: [
      {
        data: weekExpenses,
        backgroundColor: "#EC755C",
      },
    ],
  };

  return <Bar data={mydata} options={myoptions} />;
}
