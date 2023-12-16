'use client'
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, Container, MenuButtonWrapper, Title } from './../styles'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
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

const CalendarCard = () => {
  return (
    <Container>
        <HeaderWrapper>
            <Title>Event Calendar</Title>
            <MenuButton/>
        </HeaderWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar/>
        </LocalizationProvider>
    </Container>
    )
}

export default CalendarCard