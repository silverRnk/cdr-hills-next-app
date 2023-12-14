'use client'
import BookIcon from '@/components/svg/BookIcon'
import ChartCard from '@/components/ui/ChartCard'
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

const Wrapper = styled.div`
  width: 1180px;
  margin: 0 auto;
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
  gap: 20px;`

const ChartsContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`
const MiscContainer = styled.div`
  flex: 1;
`
const CalendarContainer = styled.div``;
const ReminderContainer = styled.div``;

const AdminDashboard = () => {
  return (
    <Container>
      <Wrapper>
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
        <ChartsContainer>
          <ChartCard title='my_title1'/>
          <ChartCard title='my_title2'/>
          <ChartCard title='my_title3'/>
          
        </ChartsContainer>
        <MiscContainer>

        </MiscContainer>
      </Bottom>
      </Wrapper>
    </Container>
  )
}

export default AdminDashboard