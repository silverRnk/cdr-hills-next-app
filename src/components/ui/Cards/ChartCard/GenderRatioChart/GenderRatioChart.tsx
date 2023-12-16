import React from 'react'
import { Button, ContainerSm, MenuButtonWrapper, Title } from '../../styles'
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
import styled from "styled-components";
import { theme } from '@/styled-component/theme';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ChartWrapper = styled.div`
    margin: auto 0;
    width: 100%;
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
font-size: 0.85rem;
color:gray;
`

const Text = styled.p`
margin: 0 2px;
font-size: 0.9rem;
font-weight: 400;
`

const SmallLine = styled.div`
  height: 3px;
  width: 100%;
`

const VertLine = styled.div`
    height: 50px;
    width: 3px;
    border-radius: 10px;
    background-color: lightgray;
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


const LabelItem = (props: {color: string, subText:string, amount:string}) => {
    const {color, subText, amount} = props;
    return (
    <ColWrapper>
        <SmallLine style={{backgroundColor:color}}/>
        <SubText>
            {subText}
        </SubText>
        <Text>{amount}</Text>
    </ColWrapper>
    )
}

const GenderRatioChart = () => {
  return (
    <ContainerSm>
        <HeaderWrapper>
            <Title>Students</Title>
            <MenuButton/>
        </HeaderWrapper>
    <ChartWrapper>
        <Doughnut
            data={{
            labels: ['Male, Female'],
            datasets:[
            {data: ['40000', '40100'], backgroundColor: [
                theme.colors.primary,
                theme.colors.red,
            ]}
            ]
        }}
         ></Doughnut>
    </ChartWrapper>
    <LabelContainer>
        <LabelItem color={theme.colors.primary} subText='Male' amount='40000'/>
        <VertLine/>
        <LabelItem color={theme.colors.red} subText='Female' amount='40100'/>
    </LabelContainer>
    
  </ContainerSm>)
}

export default GenderRatioChart