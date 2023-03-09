
import React from "react";
import Select from "react-select";




export const options = [
  { value: 'apiINC', label: "Tabela INC" },
  { value: 'apiWO', label: "Tabela WO" },
  { value: 'apiINCReabertos', label: "Tabela INC - Reabertos" },
];


export const SelectTable = (props) => {

  const defaultOption = options.find(({ value, label }, idx) => props.value === value);
  return (<div>
    <Select options={options} onChange={props.onChange} defaultValue={defaultOption} >

    </Select>
  </div>)

}