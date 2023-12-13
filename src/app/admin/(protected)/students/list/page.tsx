'use client'
// import StudentTable from '@/components/ui/StudentTable/StudentTable'
import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'

import dynamic from 'next/dynamic'
import { StudentProfileShort } from '@/util/types'
import { setInterval } from 'timers/promises'
import { setTimeout } from 'timers'
import { studentListShort } from '../data'
import { Pagination } from '@mui/material'
import { pagerReducer, pagerState, searchSetting, searchSettingReducer } from './reducer'
import { ButtonSearch, SearchContainer, SearchInput, SearchOption, SearchSelection } from '../../../../../styled-component/search-input-components'
 
const StudentTable = dynamic(() => import('@/components/ui/StudentTable/StudentTable'), { ssr: false })

const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;
`

const Wrapper = styled.div`
  width: 1080px;
  height: 1000px;
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

const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: #14238a;
  margin-bottom: 40px;
`;

const PagerContainer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const InputName = styled(SearchInput)``;

const Selection = styled(SearchSelection)``;

const SelectionItem = styled(SearchOption)``;

const Button = styled(ButtonSearch)``;



const StudentList = () => {
  const [studentList, setStudentList] = useState<StudentProfileShort[]>([])
  const [pageState, setPageState] = useReducer(pagerReducer, pagerState)
  const [searchState, setSearchState] = useReducer(searchSettingReducer, searchSetting)

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log('Hello timmer'),
      setStudentList(studentListShort);
    }, 3000);

  }, [])


  return (
    <Container>
    <Wrapper>
        <Title>All Students</Title>
        <SearchContainer>
        <InputName
        //  ref={nameRef}
        placeholder="Search by Name" />

        <Selection
          placeholder="Select Class"
          // ref={gradeLevelRef}
          // onInput={handleClassName}
        >
          <SelectionItem value={""}> Select Class </SelectionItem>
          
          {/* {gradeAndSection.map((item) => (
            <SelectionItem value={item.grade_level_id}>
              {item.grade_level}
            </SelectionItem>
          ))} */}
        </Selection>
        <Selection 
        // ref={sectionRef}
        >
          <SelectionItem value={""}> Select Section </SelectionItem>
          {/* {sectionList.map((section) => (
            <SelectionItem value={section.id}>
              {section.name}
            </SelectionItem>
          ))} */}
        </Selection>
        <ButtonSearch
         onClick={() => {}}
         >Search</ButtonSearch>
      </SearchContainer>
        <StudentTable data={studentList} onSelectRow={() => {}} isLoading={studentList.length == 0}/>
        <PagerContainer>
        <Pagination
          count={pageState.pageCount}
          page={pageState.pageNumber}
          onChange={() => {}}
        />
        </PagerContainer>
    </Wrapper>
    </Container>
  )
}

export default StudentList