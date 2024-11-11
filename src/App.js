import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sales Dashboard</h1>
      </header>
      <main>
        <Dashboard />
     
      </main>
    </div>
  );
}

export default App;
