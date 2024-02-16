'use client'
import ParentIcon from '@/components/svg/ParentIcon'
import StudentIcon from '@/components/svg/StudentIcon'
import TeacherIcon from '@/components/svg/TeacherIcon'
import { ExpensesChart, GenderRatioChart, IncomeAndExpensesChart } from '@/components/ui/Cards/ChartCard'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReminderCard from '@/components/ui/Cards/Reminder/ReminderCard'
import Chip from '@/components/ui/chip'
import { dashboardMockData, weeklyExpenses, weeklyIncome } from '@/util/data'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const CalendarCard = dynamic(() => import('@/components/ui/Cards/Calendar/CalanderChard'))

const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 40px;
`

const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
`

const ChipsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  gap: 20px;`

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`
const MiscContainer = styled.div`
  display: flex;
  gap: 20px;
`

const AdminDashboard = () => {

  useEffect(() => {
    console.log(weeklyExpenses)
  })

  return (
    <Container>
      <Wrapper>
      <ChipsContainer>
        <Chip
          icon={<StudentIcon style={{ fontSize: "40px", color: "#3CB878" }} />}
          color={"#D1F3E0"}
          title={"Students"}
          data={dashboardMockData.students}
        />
        <Chip
          icon={<TeacherIcon style={{ fontSize: "40px", color: "#3F7AFC" }} />}
          color={"#E1F1FF"}
          title={"Teachers"}
          data={dashboardMockData.teacher}
        />
        <Chip
          icon={<ParentIcon style={{ fontSize: "40px", color: "#FFA002" }} />}
          color={"#FFF2D8"}
          title={"Parents"}
          data={dashboardMockData.parents}
        />
        <Chip
          icon={<AttachMoneyIcon style={{ fontSize: "40px", color: "#FF0000" }} />}
          color={"#FFEAEA"}
          title={"Earning"}
          data={dashboardMockData.earning}
        />
      </ChipsContainer>
      <Bottom>
        <ChartsContainer>

          <IncomeAndExpensesChart 
            title='income & expenses' 
            label={['1', '2', '3', '4', '5']} 
            incomeData={weeklyIncome} 
            expensesData={weeklyExpenses}/>

            <ExpensesChart 
              year={2023} 
              months={['Sept', 'Oct', 'Nov']} 
              data={[5000, 3000, 4000]}/>

            <GenderRatioChart/>
        </ChartsContainer>
        <MiscContainer>
          <CalendarCard/>
          <ReminderCard/>
        </MiscContainer>
      </Bottom>
      </Wrapper>
    </Container>
  )
}

export default AdminDashboard