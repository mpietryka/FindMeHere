import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({ chartData }) => {

  var options = {
    maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          beginAtZero: true,
        },
      },
  
}

  return <Line data={chartData} options={options} className="p-4" />;
};
