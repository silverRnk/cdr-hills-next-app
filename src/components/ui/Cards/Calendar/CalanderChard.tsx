import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Container, Title } from './../styles'

const CalendarCard = () => {
  return (
    <Container>
        <Title>Event Calendar</Title>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar/>
        </LocalizationProvider>
    </Container>
    )
}

export default CalendarCard