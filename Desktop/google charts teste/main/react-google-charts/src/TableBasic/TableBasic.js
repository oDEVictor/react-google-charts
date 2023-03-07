/* eslint-disable eqeqeq */

import MUIDataTable from "mui-datatables";



function Columnss(objeto) {
    console.log(objeto)

    if (objeto == undefined) {
        return([])
    }
    
    return(Object.keys(objeto).map((key) => {

        let display = false;
        ['titulo', 'status', 'cliente', 'prioridade', 'designado'].forEach(value => {
            if(!display) {
                display = key.toLocaleLowerCase().includes(value);
            }
        });
        
        return {
            name: key,
            label:key,
            options: {
                filter: true,
                sort: true,
                display: display,
            }
        }}));
        
}


function TableBasic(props) {
    const coluna = Columnss(props.data[0])
    return (
        <MUIDataTable
            // title =  {props.title}
            // columns = {coluna}
            columns={coluna}
            data = {props.data}
            
        />
    )
}

export default TableBasic;
