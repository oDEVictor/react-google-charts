import React from "react";
import apiINC from "../service/apiINC";
import apiINCReabertos from "../service/apiINCReabertos";
import apiWO from "../service/apiWO";



export function ApiSelector(props) {
    function handleApiChange(event) {
        props.onChange(event.target.value);
    }
    
    
    return (
        <div>
            <h2>Selecione uma API</h2>
            <select onChange={handleApiChange}>
                <option value= {apiINC}>API INC</option>
                <option value= {apiWO}>API WO</option>
                <option value= {apiINCReabertos}>API INC Reabertos</option>
            </select>

            <props.TableComponent api= {props.selectedApi}/>
        </div>
    );
}