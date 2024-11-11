import React, { useEffect, useRef } from "react";
import { AgCharts } from "ag-charts-community"; // Import AgCharts from ag-charts-community
import { getData } from "../data/data";

const DashboardAg = () => {
  const chartRef = useRef(null); // Ref for chart container
  const dateFormatter = new Intl.DateTimeFormat("en-US");
  const tooltip = {
    renderer: ({ title, datum, xKey, yKey }) => ({
      title,
      content: `${dateFormatter.format(datum[xKey])}: ${datum[yKey]}`,
    }),
  };

  useEffect(() => {
    const options = {
      data: getData(),
      title: {
        text: "Road Fuel Prices",
      },
      footnote: {
        text: "Source: Department for Business, Energy & Industrial Strategy",
      },
      series: [
        {
          type: "line",
          xKey: "date",
          yKey: "petrol",
          tooltip,
        },
        {
          type: "line",
          xKey: "date",
          yKey: "diesel",
          tooltip,
        },
      ],
      axes: [
        {
          position: "bottom",
          type: "time",
          title: {
            text: "Date",
          },
          label: {
            format: "%b",
          },
        },
        {
          position: "left",
          type: "number",
          title: {
            text: "Price in Pence",
          },
        },
      ],
    };

    const chart = AgCharts.create({
      ...options,
      container: chartRef.current, // Use the ref to set the container for the chart
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [tooltip]); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div style={{ width: "100%", height: "400px" }} ref={chartRef}></div> // Use ref here
  );
};

export default DashboardAg;
