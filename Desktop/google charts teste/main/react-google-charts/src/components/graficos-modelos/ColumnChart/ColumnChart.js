import React from "react";
import Chart from "react-google-charts";


  
  export function ColumnChart(props) {
    // console.log(props, 'props');
    return (
      <Chart chartType="ColumnChart" 
      width="100%" 
      height="400px"
      data = {props.data}
      style = {props.style}
       />
    );
  }