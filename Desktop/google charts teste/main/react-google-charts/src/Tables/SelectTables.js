
import React from "react";
import Select from "react-select";




export const options = [
  { value: 'apiINC', label: "Tabela INC" },
  { value: 'apiWO', label: "Tabela WO" },
  { value: 'apiINCReabertos', label: "Tabela INC - Reabertos" },
];


export const SelectTable = (props) => (
  
  <div>
    <Select options = {options} onChange = {props.onChange}>

    </Select>
  </div>
  
)