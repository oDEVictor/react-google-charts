import React from "react";
import { Chart } from "react-google-charts";



export const options = {
 
  legend: "",
  pieSliceText: "all",
  slices: {
    0: { offset: 0.1 },
    1: { offset: 0.2 },
    2: { offset: 0.1 },
    3: { offset: 0.1 },
    4: { offset: 0.4 },
  },

};

export function PieSlice(props) {
  return (
    <><h2>Modelo Fatiado</h2>
    <Chart
      chartType="PieChart"
      data={props.data}
      options={props.options}
      width={"100%"}
      height={"400px"}
      
  
    /></>
  );
}

