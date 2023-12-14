'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement
  
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

import React, { useLayoutEffect } from 'react'
import styled from 'styled-components';

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);


const Container = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 30px;
  box-shadow: 5px 5px 5px gray;
  border-radius: 7px;
`;

const ChartCard = (props: {title: string,}) => {
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

export default ChartCard