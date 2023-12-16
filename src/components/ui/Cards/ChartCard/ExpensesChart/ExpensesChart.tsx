import { ContainerSm, Title } from "../../styles"
import {
    Chart as ChartJS,
    CategoryScale,
    // LinearScale,
    Tooltip,
    // PointElement,
    // LineElement,
    BarElement,
    // ArcElement,
    // BarOptions
    
  } from "chart.js";

import { Bar, Chart, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    BarElement,
    // LinearScale,
    // PointElement,
    // LineElement,
    // ArcElement,
    Tooltip
  );

export const ExpensesChart = () => {

    return (
    <ContainerSm>
      <Title>Expenses</Title>
      <Bar
        height={400}
        width={200}
        style={{height: "400px", width:"200px"}}
        data={{
          labels: ['Sep', 'Oct', 'Nov'],
          datasets: [
            {
              label: "Expenses",
              data: [5000, 3000, 4000],
              backgroundColor: [
                '#4FE397',
                '#2139DE',
                '#F22829'
              ]
            }
          ]
        } 
        }
        options={{
      
          scales:{
            y:{
              beginAtZero: true,
              max: 10000,
              ticks:{
                count: 11,
                precision: 0,
                stepSize: 1000, 
                maxTicksLimit: 10, 
                callback(tickValue, index, ticks) {
                  let tickvalue = Math.floor(Number(tickValue) / 1000)
                  return tickValue == 0? 0: tickvalue + 'k'
                },},},
            // screenY:{max: 10000}
          }
  
        }
        }
      />
    </ContainerSm>)
  }