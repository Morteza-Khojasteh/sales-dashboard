import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.region),
    datasets: [
      {
        label: "Sales by Region ($)",
        data: data.map((item) => item.sales),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
