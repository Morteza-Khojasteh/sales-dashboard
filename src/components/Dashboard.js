import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import salesData from "../data/salesData.json";

const Dashboard = () => {
  const [monthlySales, setMonthlySales] = useState([]);
  const [categorySales, setCategorySales] = useState([]);
  const [regionSales, setRegionSales] = useState([]);

  useEffect(() => {
    setMonthlySales(salesData.monthlySales["2023"]);
    setCategorySales(salesData.categorySales);
    setRegionSales(salesData.regionSales);
  }, []);

  return (
    <div>
      <h2>Sales Dashboard</h2>
      <LineChart data={monthlySales} />
      <BarChart data={categorySales} />
      <PieChart data={regionSales} />
    </div>
  );
};

export default Dashboard;
