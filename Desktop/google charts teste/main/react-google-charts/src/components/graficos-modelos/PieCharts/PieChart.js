import { Chart } from "react-google-charts";
import React from "react";
// import api from "../../../service/api";


// export const data = api().data;
// console.log(data);
export const options = {
  title: "Datas",
};

  export function PieChart (props){

    
    return(
      <div className="PieChart">
        <h2>PieChart</h2>
        <Chart 
            chartType="PieChart" 
            width = {"100"} 
            height = {"400px"}
            data = {props.data}
            
             />
      </div>
    );
  }