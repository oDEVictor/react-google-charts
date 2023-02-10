
import React, { useEffect } from "react";
import { PieChart } from "./components/graficos-modelos/PieCharts/PieChart";
import { BarChartHorizontal } from "./components/graficos-modelos/BarChartHorizontal/BarChartHorizontal";
import { AreaChart } from "./components/graficos-modelos/AreaChart/AreaChart";
import { BarChartVertical } from "./components/graficos-modelos/BarChartVertical/BarChartVertical";
import api from "./service/api";


// const Service =() {
//   [
//     ['Designado', 'Total']
//   ];
// }


const App = () => {
  //  const[chartData, setChartData] = useState([]);
  

   useEffect(() => {
    const fetchData = async () => {
        const data = (await api()).data;
        console.log(data);
        data.body.forEach(element => {
          console.log(element);
        });
   }
   
   fetchData()
   .catch(console.error);
  }, [])



  //   api.get('DESIGNADO')
  //   .then((response) => setServico(response.data.map))
  //   .catch((err) =>{
  //     console.error("error" + err);
  //   })
  // }, []);
  

  return(
    <div className="App">
      <h1>Graphics in React</h1>


      <PieChart />
      <BarChartHorizontal />
      <BarChartVertical />
      <AreaChart />

    </div>
  );
}


export default App;
