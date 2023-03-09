import React from "react";
import { Chart } from "react-google-charts";
import LoadingEffect from "../../LoadingEffect";


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
  const sliceVisibilityThreshold = props.resumeData? 0.02 : 0; 
  return (
    <div style={{ height: 400}}>
      {props.title && <h3 className='pt-4 h-10'>{props.title}</h3>}
      <LoadingEffect isLoading={!props.data || props.data.length <= 1 || props.isLoading}>
        <Chart
          chartType="PieChart"
          data={props.data}
          options={{ ...props.options, backgroundColor: 'transparent', sortAscending: true, sortColumn: 0, sliceVisibilityThreshold: sliceVisibilityThreshold }}
          width={"100%"}
          height={"100%"}

        />
      </LoadingEffect>

    </div>
  );
}

