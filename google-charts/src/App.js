
import React from "react";
import { PieChart } from "./components/graphics-models/PieCharts/PieCharts";
import { BarChartHorizontal } from "./components/graphics-models/BarChart/BarChart-Horizontal/BarChartHorizontal";
import { AreaChart } from "./components/graphics-models/AreaChart/AreaChart";
import { BarChartVertical } from "./components/graphics-models/BarChart/BarChart-Vertical/BarChartVertical";


const App = () => {
  return(
    <div className="app">
      <h1>Graphics in React</h1>
      <PieChart/>
      <BarChartHorizontal/>
      <BarChartVertical/>
      <AreaChart/> 

    </div>
  );
}


export default App;

