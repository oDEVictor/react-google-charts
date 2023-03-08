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



  const dataStatusINC = getDataByKey("STATUS", "Status INC", data);
  const dataStatusWO = getDataByKey("STATUS", "Status WO", dataWO);
  const dataStatusINCReabertos = getDataByKey("STATUS", "Status INC Reabertos", dataReabertos);
  const dataClientesINC = getDataByKey("CLIENTE_SOLICITANTE", "Clientes Solicitantes INC", data);
  const dataClientesWO = getDataByKey("CLIENTE_SOLICITANTE", "Clientes Solicitantes WO", dataWO);
  const dataClientesINCReabertos = getDataByKey("CLIENTE_SOLICITANTE", "Clientes Solicitantes INC reabertos", dataReabertos);
  const dataDesigWO = getDataByKey("DESIGNADO", "Designados WO", dataWO);
  const dataDesigINC = getDataByKey("DESIGNADO", "Designados INC", data);
  const dataDesigINCReabertos = getDataByKey("DESIGNADO", "Designados INC Reabertos", dataReabertos);
  const dataPrioridadeINC = getDataByKey("PRIORIDADE", "Prioridade INC", data);
  const dataPrioridadeWO = getDataByKey("PRIORIDADE", "Prioridade WO", dataWO);
  const dataPrioridadeINCReabertos = getDataByKey("PRIORIDADE", "Prioridade INC Reabertos", dataReabertos);
  const dataCriticidadeINC = getDataByKey("CRITICIDADE", "Criticidade INC", data);
  const dataCriticidadeWO = getDataByKey("CRITICIDADE", "Criticidade WO", dataWO);
  const dataCriticidadeINCReabertos = getDataByKey("CRITICIDADE", "Criticidade INC Reabertos", dataReabertos);


  return (
    <div>

      <FullStyled>
        <h1>Dashboard Atendimentos de Sustentacao do MEC</h1>

        <div className="status">
          <PieChart {...dataStatusWO}            />
          <PieChart {...dataStatusINC}           />
          <PieChart {...dataStatusINCReabertos}  />
        </div>

        <PieChart {...dataDesigWO}               />
        <PieChart {...dataDesigINC}              />
        {/* <PieChart {...dataDesigINCReabertos} />   Indefinido*/}

        <PieChart {...dataClientesINC}           />
        <PieChart {...dataClientesWO}            />
        <PieChart {...dataClientesINCReabertos}  />

        <PieChart {...dataPrioridadeINC}         />
        <PieChart {...dataPrioridadeWO}          />
        <PieChart {...dataPrioridadeINCReabertos}/>
        

        <PieChart {...dataCriticidadeINC}         />
        <PieChart {...dataCriticidadeWO}          />
        <PieChart {...dataCriticidadeINCReabertos}/>


        <ColumnChart {...dataDesigINCReabertos}   />

        <SelectTable value={select} onChange={onChange}/>

        {select === 'apiINC' ? <TableBasic data={data} title={'Tabela INC'} /> : null}
        {select === 'apiINCReabertos' ? <TableBasic data={dataReabertos} title={'Tabela INC Reabertos'} /> : null}
        {select === 'apiWO' ? <TableBasic data={dataWO} title={'Tabela WO'} /> : null}


      </FullStyled>
    </div>

  );
};


export default App;


