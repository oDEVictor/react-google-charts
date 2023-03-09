import { Chart } from "react-google-charts";
import React from "react";
import LoadingEffect from "../../LoadingEffect";

export const options = {
  title: "",

}


export function PieChart(props) {

  const sliceVisibilityThreshold = props.resumeData? 0.02 : 0; 
  return (

    <div className='col' style={{ height: 400 }} >
      {props.title && <h3 className='pt-4 h-10'>{props.title}</h3>}
      <LoadingEffect isLoading={!props.data || props.data.length <= 1 || props.isLoading}>
        <Chart
          chartType="PieChart"
          data={props.data}
          height={props.title ? '90%' : '100%'}
          width={'100%'}
          
          options={{ ...props.options, backgroundColor: 'transparent', sortAscending: true, sortColumn: 0, sliceVisibilityThreshold: sliceVisibilityThreshold }}

        />
      </LoadingEffect>
    </div>
  );
}
