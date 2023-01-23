import { Chart } from "react-google-charts";
import React from "react";

export const data = [
    ['Task', 'Hours per Day'],
    ['Work',     15],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ];


  export function PieChart (props){
    return(
      <div className="PieChart">
        <h2>PieChart</h2>
        <Chart chartType="PieChart" data={data} width = {"100"} height = {"400px"} />
      </div>
    );
  }