import React, { useEffect, useState } from "react";
import { PieChart } from "./components/graficos-modelos/PieCharts/PieChart";
import { ColumnChart } from "./components/graficos-modelos/ColumnChart/ColumnChart";
import apiINC from "./service/apiINC";
import apiWO from "./service/apiWO";
import apiINCReabertos from "./service/apiINCReabertos";
import { FullStyled } from "./components/graficos-modelos/PieCharts/styles";
import { SelectTable } from "./Tables/SelectTables";
import TableBasic from "./TableBasic/TableBasic";






const App = () => {
  const [data, setData] = useState([]);
  const [dataWO, setDataWO] = useState([]);
  const [dataReabertos, setdataReabertos] = useState([]);
  const [select, setSelect] = useState('');





function onChange(event) {
  setSelect(event.value)

}

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await apiINC();
        const data = response.data.body;
       
        setData(data)
      } catch (error) {
        console.error(error);
      }
    };
   
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await apiWO();
        const dataWO = response.data.body;
      
        setDataWO(dataWO);
      } catch (error) {
        console.error(error);
      }
    };
   
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiINCReabertos();
        const dataReabertos = response.data.body;
        setdataReabertos(dataReabertos);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getDataByKey = (key, title, data) => {
    const dataByKey = {};

    data.forEach((element) => {
      const value = element[key];

      if (value in dataByKey) {
        dataByKey[value] += 1;
      } else {
        dataByKey[value] = 1;
      }
    });




    return {
      options: {
        
      },
      title: title,
      data: [[title, 'Quantidade'],
      ...Object.entries(dataByKey).map(([keyValue, value]) => [keyValue, value]),
      ]
    };
  }


  const dataClient = getDataByKey("CLIENTE_SOLICITANTE", "Clientes Solicitantes", data);
  const dataStatus = getDataByKey("STATUS", "Status INC", data);
  const dataDesig = getDataByKey("DESIGNADO", "Designados", data);
  const dataStatusWO = getDataByKey("STATUS", "Status WO", dataWO)

  return (
    <div>

      <FullStyled>
        <h1>Dashboard Atendimentos de Sustentacao do MEC</h1>

        <PieChart {...dataStatusWO} />
        <PieChart {...getDataByKey('PRIORIDADE', 'Prioridade INC', dataReabertos)} />
        <PieChart {...dataStatus} />
        <PieChart {...dataClient} />
        <PieChart {...dataStatus} />
        <PieChart {...dataDesig} />


        <ColumnChart {...dataDesig} />

        <SelectTable value = {select} onChange = {onChange}
        />
        
        {select === 'apiINC' ?  <TableBasic data = {data} title = {'Tabela INC'} /> : null }
        {select === 'apiINCReabertos' ? <TableBasic data = {dataReabertos} title = {'Tabela INC Reabertos'}/> : null}
        {select === 'apiWO' ?<TableBasic data = {dataWO} title = {'Tabela WO'} /> : null}
        
        
    
      






      </FullStyled>
    </div>

  );
};


export default App;


