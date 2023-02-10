
import React, { useEffect, useState } from "react";
import { PieChart } from "./components/graficos-modelos/PieCharts/PieChart";
import { PieSlice } from "./components/graficos-modelos/PieSlice/PieSlice";
import { BarChartHorizontal } from "./components/graficos-modelos/BarChartHorizontal/BarChartHorizontal";
import { AreaChart } from "./components/graficos-modelos/AreaChart/AreaChart";
import { BarChartVertical } from "./components/graficos-modelos/BarChartVertical/BarChartVertical";
import { ColumnChart } from "./components/graficos-modelos/ColumnChart/ColumnChart";
import { DiffColumnChart } from "./components/graficos-modelos/DiffColumnChart/DiffColumnChart";

import api from "./service/api";




const App = () => {
  const [chartData, setChartData] = useState({});
  const [chartDataCoord, setChartCoord] = useState({});
  const [filter, setFilter] = useState('Solicitantes');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api();
        const data = response.data;
        console.log(data);
        const solicitantes = {};
        const coordenacoes = {};

        data.body.forEach((element) => {
          const solicitante = element["SOLICITANTE"];
         
          if (solicitante in solicitantes) {
            solicitantes[solicitante] += 1;
          } else {
            solicitantes[solicitante] = 1;
          }

        });

        data.body.forEach((element) => {
          const coordenacao = element["COORDENACAO"];
         
          if (coordenacao in coordenacoes) {
            coordenacoes[coordenacao] += 1;
          } else {
            coordenacoes[coordenacao] = 1;
          }

        });
        // const dataForChart = Object.entries(solicitantes).map(([solicitante, value]) => [ solicitante, value, "#FF494C" ]);

        const dataForChart = [['Solicitante', 'Quantidade' ],
      ].concat(
          Object.entries(solicitantes).map(([solicitante, value]) => [ solicitante, value])
        );

         setChartData(dataForChart);
         console.log(dataForChart);

         const dataCoordination = [['Coordenação', 'Quantidade'],
      ].concat(
          Object.entries(coordenacoes).map(([coordenacao, value]) => [ coordenacao, value])
        );

          setChartCoord(dataCoordination)

         console.log(dataCoordination);

        if (dataForChart[0].length >= 2) {
          setChartData(dataForChart);
        } else {
          console.error("Table has no columns.");
        }

      }catch (error) {
        console.error(error);
      }
    };
  

    fetchData();
  }, []);
        
  // function onFilterChange(event){
    
  //   setFilter(event.target.value);
  //   if (event.target.value === "Coordenação") {
  //     <PieChart data = {chartDataCoord} />
  //   }else {
  //     <PieChart data = {chartData} />
  //   }
  // // }
  // console.log(onFilterChange)
  return (
    <div>
      <h1>Grafics in React</h1>
      <select >
          <option>Solicitantes</option>
          <option>Coordenação</option>
         
      </select>
      <PieChart  data = {chartData} />
      <BarChartHorizontal />
      <BarChartVertical />
      <AreaChart />
      <ColumnChart  data = {chartDataCoord} style = {{color: "#0592FF"}} />
      <PieSlice data = {chartDataCoord} />
      <DiffColumnChart  />
    </div>
  );
};




export default App;

