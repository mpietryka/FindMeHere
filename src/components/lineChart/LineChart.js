import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({ chartData }) => {
  const options = {
    maintainAspectRatio: false,
    //responsive : true,
  };
  return <Line data={chartData} options={options} className="p-4" />;
};
