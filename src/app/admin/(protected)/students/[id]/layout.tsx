'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import SchoolLogo from './cedarhills.png'
import Image from 'next/image'
import ProfileImage from './components/ProfileImage'
import StudentName from './components/StudentName'
// import Option, {Option as BaseOption, optionClasses } from '@mui/base/Option';
//Mui Tabs
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StudentDetails from './components/StudentDetails'
import { Menu } from 'react-pro-sidebar'
import UpdateGradeLevelAndSection from './components/UpdateGradeAndSection'
import UpdateStatusForm from './components/UpdateStatus'
import { useParams, usePathname, useRouter } from 'next/navigation'

const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;
`

const Wrapper = styled.div`
  width: 1080px;
  min-height: 1000px;
  border-radius: 10px;
  box-shadow: 0 0 7px lightgray;
  background-color: white;
  margin: 100px auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 5px gray;
`

const Top = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Status = styled.span`
  ${(props) => props.theme.fontThemes.h4}
  margin-bottom: 40px;
  text-transform: capitalize;
`;

const Right = styled.div`
  flex:3;
  margin: 5px 20px;
`

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TabMenus = ({children}:{children:React.ReactNode}) => {

  const {id} = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter()
  const url = usePathname();
  const slug = url.split('/').at(-1)

  useEffect(() => {
    console.log(slug);
    if(slug == "credentials"){
      setSelectedTab(1);
    }else if(slug == "grades"){
      setSelectedTab(2);
    }else{
      setSelectedTab(0);
    }
  }, [url])
  
  
  const handleSelectTab = (item:number) => {

    if(item == 1){
      router.push(`/admin/students/${id}/credentials`)
    }else if(item == 2){
      router.replace(`/admin/students/${id}/grades`)
    }else{
      router.replace(`/admin/students/${id}/`)
    }
    

  }

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                value={selectedTab}
                onChange={(_, value) => handleSelectTab(value)}
                >
                  <Tab label="Profile" value={0} />
                  <Tab label="Credentials" value={1} />
                  <Tab label="Grades" value={2} />
                </Tabs>
              </Box>

              {children}

              {/* <CustomPa value="1">
                {/* <InfoContainer>
                  <StudentDetails
                    data={studentProfile}
                    isLoading={isLoading}
                  />
                </InfoContainer> */}
              

              {
                //Tab2
              }
              {/* //<TabPanel value="2"> */}
                {/* <StudentsCredentials id={studentProfile?.id_number} /> */}

              
              {/* <TabPanel value="3">
                {/* <GradesTableWrapper>
                  <GradeTableHeader>
                    <GradeTableTitle>Grades</GradeTableTitle>
                    <GradeSYSelection>
                      <GradesSYOption value={""}>
                        {" "}
                        -- Select --
                      </GradesSYOption>
                    </GradeSYSelection>
                  </GradeTableHeader>
                  <GradesTable
                    grades={gradesPerSY?.grades ?? []}
                    isEmpty={!gradesPerSY}
                  />
                </GradesTableWrapper> */} 
      </Box>
    </>
  )
}

const StudentProfilePage = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      <Wrapper>
        <Top><Image src={'/cedarhills.png'} width={75} height={75} alt="School Logo" /></Top>
        <Bottom>
          <Left>
            <ProfileImage src=''/>
            <Status>Current Status: {"Newbie"}</Status>
            <UpdateStatusForm/>
            <UpdateGradeLevelAndSection/>
          </Left>
          <Right>
            <StudentName>Patrick Bautista</StudentName>
            <TabMenus>{children}</TabMenus>
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default StudentProfilePage