import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const BarChart = ({ chartData }) => {
  const options = {
    maintainAspectRatio: false,
    //responsive : true,
  };
  return <Bar data={chartData} options={options} className="p-4" />;
};
