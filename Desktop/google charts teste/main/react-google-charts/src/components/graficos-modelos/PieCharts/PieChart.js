import { Chart } from "react-google-charts";
import React from "react";


export const options = {
 title: "",
 
  }
  

  export function PieChart (props){

    
    return(
    
      <div className="PieChart">
        
          <h2>{props.title}</h2>
              <Chart 
                chartType="PieChart" 
                width = {"100"} 
                height = {"400px"}
                data = {props.data}
                options = {props.options}
                
              />
       
      </div>
     
    );
  }