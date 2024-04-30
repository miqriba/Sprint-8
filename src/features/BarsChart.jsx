import { Bar } from "react-chartjs-2";
import { lastWeekExpenses } from "../data/expenses";

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

const dies = ["dl", "dm", "dc", "dj", "dv", "ds", "dg"];

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
      max: Math.max(...lastWeekExpenses),
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
      data: lastWeekExpenses,
      backgroundColor: "#EC755C",
    },
  ],
};

export default function BarsChart() {
  return <Bar data={mydata} options={myoptions} />;
}
