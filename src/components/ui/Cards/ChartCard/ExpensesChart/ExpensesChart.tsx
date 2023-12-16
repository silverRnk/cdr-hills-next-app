import styled from "styled-components";
import { ContainerSm, Title } from "../../styles"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    
  } from "chart.js";

import { Bar, Chart, Doughnut, Line } from "react-chartjs-2";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip
  );

  const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `

  const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-content: start;
  justify-content: space-between;
  margin-bottom: 20px;
`

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const SubText = styled.small`
  font-size: 0.65rem;
  color:gray;
`

const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
`

const SmallLine = styled.div`
    height: 3px;
    width: 100%;
`

const colorList = [
    '#4FE397',
    '#2139DE',
    '#F22829'
]

const LabelItem = (props:{
    color: string,
    subTitle: string,
    amount: string | number
}) => {
    const {amount, subTitle, color} = props

    return (
        <ColWrapper>
            <SubText>
                {subTitle}
            </SubText>
            <Text>$ {amount}</Text>
            <SmallLine style={{backgroundColor: color}}/>
        </ColWrapper>
    )
}

export const ExpensesChart = (props:{year:string | number, months:string[], data:number[]}) => {
    const {year, months, data} = props

    return (
    <ContainerSm>
      <HeaderWrapper>
        <Title>Expenses</Title>
      </HeaderWrapper>
      <LabelContainer>
        <LabelItem color={colorList[0]} subTitle={months[0] +" "+ year} amount={5000}/>
        <LabelItem color={colorList[1]}  subTitle={months[1] +" "+ year} amount={3000}/>
        <LabelItem color={colorList[2]}  subTitle={months[2] +" "+ year} amount={4000}/>
      </LabelContainer>
      <Bar
        height={400}
        width={200}
        style={{height: "400px", width:"200px"}}
        data={{
          labels: months,
          datasets: [
            {
              label: "Expenses",
              data: data,
              backgroundColor: colorList
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