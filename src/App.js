import React, { useEffect, useState } from "react";
import { PieChart } from "./components/graficos-modelos/PieCharts/PieChart";
import { PieSlice } from "./components/graficos-modelos/PieSlice/PieSlice";
import apiINC from "./service/apiINC";
import apiWO from "./service/apiWO";
import apiINCReabertos from "./service/apiINCReabertos";
import { FullStyled } from "./components/graficos-modelos/PieCharts/styles";
import { SelectTable } from "./Tables/SelectTables";
import TableBasic from "./TableBasic/TableBasic";
import _ from 'lodash';
import normalize from "./utils/normalize";
import { capitalize } from "lodash";

const App = () => {
  const [loading, isLoading] = useState(false);
  const [dataINC, setDataINC] = useState([]);
  const [dataWO, setDataWO] = useState([]);
  const [dataReabertos, setdataReabertos] = useState([]);
  const [select, setSelect] = useState('apiINC');


  function onChange(event) {
    setSelect(event.value)
  }

  function normalizeItems(data) {

    return data.map((item) => {
      const newItem = {};

      for (const key in item) {
        let value = item[key];

        if (!value) {
          value = 'N/D';
        } else {
          const wordList = ['pendente'];

          wordList.forEach(w => {
            if (value.toLowerCase().includes(w)) {
              value = capitalize(value);
            }
          })
        }

        newItem[normalize(key)] = value;

      }
      return newItem;
    });

  }

  const allData = [...dataINC, ...dataWO,];
  useEffect(() => {
    async function fetchData() {
      isLoading(true);
      try {
        const INCResponse = await apiINC.get();
        setDataINC(normalizeItems(INCResponse.data['body']));

        const WOResponse = await apiWO.get();
        setDataWO(normalizeItems(WOResponse.data['body']))

        const INCReabertosResponse = await apiINCReabertos.get();
        setdataReabertos(normalizeItems(INCReabertosResponse.data['body']));

        isLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const getDataByKey = (key, title, data) => {
    let dataByKey = {};

    key = normalize(key);
    data.forEach((element) => {
      const value = element[key];

      if (value in dataByKey) {
        dataByKey[value] += 1;
      } else {
        dataByKey[value] = 1;
      }
    });

    dataByKey = Object.entries(dataByKey);
    dataByKey = _.orderBy(dataByKey);

    return {
      options: {},
      title: title,

      data: [[title, 'Quantidade'],
      ...dataByKey,
        // ...Object.entries(dataByKey).map(([keyValue, value]) => [keyValue, value]),
      ]
    };
  }



  const dataStatusINC = getDataByKey("STATUS", "INC", dataINC);
  const dataStatusWO = getDataByKey("STATUS", "WO", dataWO);
  const dataStatusINCReabertos = getDataByKey("STATUS", "INC Reabertos", dataReabertos);
  // const dataClientesINC = getDataByKey("CLIENTE_SOLICITANTE", "Clientes Solicitantes INC", dataINC);
  // const dataClientesWO = getDataByKey("CLIENTE_SOLICITANTE", "Clientes Solicitantes WO", dataWO);
  // const dataClientesINCReabertos = getDataByKey("CLIENTE_SOLICITANTE", "Clientes Solicitantes INC reabertos", dataReabertos);
  // const dataDesigWO = getDataByKey("DESIGNADO", "Designados WO", dataWO);
  // const dataDesigINC = getDataByKey("DESIGNADO", "Designados INC", dataINC);
  // const dataDesigINCReabertos = getDataByKey("DESIGNADO", "Designados INC Reabertos", dataReabertos);
  const dataPrioridadeINC = getDataByKey("PRIORIDADE", "INC", dataINC);
  const dataPrioridadeWO = getDataByKey("PRIORIDADE", "WO", dataWO);
  const dataPrioridadeINCReabertos = getDataByKey("PRIORIDADE", "INC Reabertos", dataReabertos);
  const dataCriticidadeINC = getDataByKey("CRITICIDADE", "INC", dataINC);
  const dataCriticidadeWO = getDataByKey("CRITICIDADE", "WO", dataWO);
  const dataCriticidadeINCReabertos = getDataByKey("CRITICIDADE", "INC Reabertos", dataReabertos);




  return (
    <FullStyled>
      <div className='container-fluid p-0'>
        <h1 className='py-2'>Painel de Monitoramento de Chamados de Sustentação do MEC</h1>

        <h2>Status</h2>
        <div id='graficos-status' className='row'>
          <PieChart {...dataStatusWO} />
          <PieChart {...dataStatusINC} />
          <PieChart {...dataStatusINCReabertos} />
        </div>

        <div id='Cliente-designado'>
          <h2>Designados</h2>
          <PieSlice resumeData {...getDataByKey('DESIGNADO', '', allData)} />
        </div>

        <div id='Clientes-requisistantes'>
          <h2>Requisitantes</h2>
          <PieChart resumeData {...getDataByKey('CLIENTE_SOLICITANTE', '', allData)} />
        </div>

        <h2>Prioridade</h2>
        <div id='graficos-prioridade' className='row'>
          <PieChart {...dataPrioridadeINC} />
          <PieChart {...dataPrioridadeWO} />
          <PieChart {...dataPrioridadeINCReabertos} />
        </div>

        <h2>Tipo de Solução</h2>
        <div id='graficos-criticidade' className='row'>
          <PieChart {...dataCriticidadeINC} />
          <PieChart resumeData {...dataCriticidadeWO} />
          <PieChart  {...dataCriticidadeINCReabertos} />
        </div>


        {/* <ColumnChart {...dataDesigINCReabertos} /> */}

        <SelectTable value={select} onChange={onChange} />

        {select === 'apiINC' ? <TableBasic data={dataINC} title={'Tabela INC'} /> : null}
        {select === 'apiINCReabertos' ? <TableBasic data={dataReabertos} title={'Tabela INC Reabertos'} /> : null}
        {select === 'apiWO' ? <TableBasic data={dataWO} title={'Tabela WO'} /> : null}

      </div>
    </FullStyled>
  );
};


export default App;


