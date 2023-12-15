'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
  
} from "chart.js";
import { Bar, Chart, Line } from "react-chartjs-2";

import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';
import { ChartType as MyChartType } from "./ChardCard";
import exp from "constants";
import { Container, SmallCircle, Title } from "../styles";
import { theme } from "@/styled-component/theme";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const LabelContainer = styled.div`
  display: flex;
  gap: 20px;
  align-content: center;
  justify-content: center;
`

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const SubText = styled.small`
  font-size: 0.85rem;
  color:gray;
`

const Text = styled.p`
  margin: 0 0 0 1.15rem;
  font-size: 1.15rem;
  font-weight: 400;
`

const ChartCard = (props: {title: string, type?:MyChartType}) => {
  const {title} = props
  const canvasId = title + '_' + Date.now().toString()

  return (
    <Container>
      <Bar
        height={280}
        width={280}
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
              backgroundColor: "purple",
            },
          ],
        }}
      />
    </Container>
  )
}


const EnrollmentChartCard = (props: {title: string, label: string[], data: number[]}) => {
  const {title, label, data} = props

  return(
    <Container>
      <Line
        title={title + "_" + Date.now().toString()}
        height={280}
        width={280}
        data={{
          labels: label,
          datasets: [
            {
              data: data,
              backgroundColor: "purple",
            },
          ],
        }}
      />
    </Container>
  )
}

const LabelItem = () => {
  return(
    <ColWrapper>
      <Row>
        <SmallCircle color={theme.colors.primary}/>
        <SubText>Total Collections</SubText>
      </Row>
      <Text>$ 90000</Text>
    </ColWrapper>
  )
}

export const IncomeAndExpensesChartCard = (props: {
  title: string, label: string[], incomeData: number[], expensesData:number[]}) => {
  const {title, label, incomeData, expensesData} = props

  return(
    <Container>
      <Title>Earning & Expenses</Title>
      <LabelContainer>
        <LabelItem/>
      </LabelContainer>
      <Line
        title={title + "_" + Date.now().toString()}
        height={280}
        width={280}
        data={{
          labels: label,
          datasets: [
            {
              label: 'Income',
              data: incomeData,
              backgroundColor: "blue",
              borderColor: 'blue',
              cubicInterpolationMode: 'monotone',
              tension: 0.4
            },
            {
              label: 'Expenses',
              data: expensesData,
              backgroundColor: 'red',
              borderColor: 'red',
              cubicInterpolationMode: 'monotone',
              tension: 0.4
            }
          ],
        }}
      />
    </Container>
  )
}

export default ChartCard