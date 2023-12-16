'use client'
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
import { Line } from "react-chartjs-2";

import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Container, MenuButtonWrapper, SmallCircle, Title } from "../../styles";
import { theme } from "@/styled-component/theme";

import styles from './styles.module.css'
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip
);

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
  font-size: 1rem;
  font-weight: 400;
`

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
`

const MenuButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MenuButtonWrapper>
            <Button onClick={(e) => handleClick(e)}>
                <MoreVertIcon/>
            </Button>
            <Menu 
            open={open} 
            anchorEl={anchorEl} 
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}>
                <MenuItem>Show more</MenuItem>
                <MenuItem onClick={handleClose}>Close</MenuItem>
            </Menu>
        </MenuButtonWrapper>
    )
}

const LabelItem = (props: {
  amount?:number, 
  subText: string,
  color?: string, 
  }) => {
    const {amount, subText, color} = props

    const Decorator = color? <SmallCircle innerCircleColor={color} className={styles['circle-label']}/>: <></>

    const TextI = amount? <Text>$ {amount}</Text>:<></>

  return(
    <ColWrapper>
      <Row>
        {Decorator}
        <SubText>{subText}</SubText>
      </Row>
      {TextI}
    </ColWrapper>
  )
}

const IncomeAndExpensesChart= (props: {
  title: string, label: string[], incomeData: number[], expensesData:number[]}) => {
  const {title, label, incomeData, expensesData} = props

  return(
    <Container>
        <HeaderWrapper>
            <Title>Earning & Expenses</Title>
            <MenuButton/>
        </HeaderWrapper>
      <LabelContainer>
        <LabelItem amount={90000} subText="Total Collection" color={theme.colors.primary} />
        <LabelItem amount={90000} subText="Fees Collection" color={theme.colors.red} />
        <LabelItem subText={"June 10, 2021"}/>
      </LabelContainer>
      <Line
        title={title + "_" + Date.now().toString()}
        height={200}
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
      <svg height="0" width="0">

      <filter id='shadow' color-interpolation-filters="sRGB">
        <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.5" />
        </filter>
      </svg>
    </Container>
  )
}

export default IncomeAndExpensesChart