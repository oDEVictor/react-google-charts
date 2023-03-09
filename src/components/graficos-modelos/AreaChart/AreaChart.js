import { Chart } from "react-google-charts";
import React from "react";

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  
export const Simple = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };

export const Stacking = {
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
  };
  
export const Percent = {
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
};

export function AreaChart(props) {
    return (
      <div className="Area">
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}         
        />
      </div>
    );
  }