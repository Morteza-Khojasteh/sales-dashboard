import React from "react";
import { AgCharts } from "ag-charts-react";

const DashboardAg = () => {
  const options = {
    data: [
      { month: "Jan", sales: 3000 },
      { month: "Feb", sales: 2000 },
      { month: "Mar", sales: 5000 },
      { month: "Apr", sales: 4000 },
      { month: "May", sales: 7000 },
      { month: "Jun", sales: 6000 },
    ],
    series: [
      {
        xKey: "month",
        yKey: "sales",
        yName: "Sales ($)",
        stroke: "#4285F4",
        marker: { size: 5, fill: "#4285F4" },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: { text: "Month" },
      },
      {
        type: "number",
        position: "left",
        title: { text: "Sales ($)" },
      },
    ],
    legend: { position: "bottom" },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <AgCharts options={options} />
    </div>
  );
};

export default DashboardAg;