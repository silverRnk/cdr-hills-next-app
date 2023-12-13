'use client'
import BookIcon from '@/components/svg/BookIcon'
import Chip from '@/components/ui/chip'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 40px;
`

const PageTitle = styled.h1``

const ChipsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display:flex;
  align-items:center;
  gap: 20px;`;
const CalendarContainer = styled.div``;
const ReminderContainer = styled.div``;

const AdminDashboard = () => {
  return (
    <Container>
      <ChipsContainer>
        <Chip
          icon={<BookIcon style={{ fontSize: "40px" }} />}
          color={"green"}
          title={"Students"}
          data={10000}
        />
        <Chip
          icon={<BookIcon style={{ fontSize: "40px" }} />}
          color={"green"}
          title={"Students"}
          data={10000}
        />
        <Chip
          icon={<BookIcon style={{ fontSize: "40px" }} />}
          color={"green"}
          title={"Students"}
          data={10000}
        />
        <Chip
          icon={<BookIcon style={{ fontSize: "40px" }} />}
          color={"green"}
          title={"Students"}
          data={10000}
        />
      </ChipsContainer>
      <Bottom>
        
      </Bottom>
    </Container>
  )
}

export default AdminDashboard