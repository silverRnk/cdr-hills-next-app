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

const pagerState = {
  pageCount: 1,
  pageNumber: 1,
}

type PagerState = typeof pagerState;

function pageReducer(reducer: PagerState, action: {type: string, pageCount: number, pageNumber}): PagerState{
  let newPage;

  switch(action.type){
    case "set_page_count":
      return {
        pageCount: action.pageCount,
        pageNumber: reducer.pageNumber
      }
    case "go_to_page":
      return {
        pageCount: reducer.pageCount,
        pageNumber: action.pageNumber
      }
    case "next_page":
      if(reducer.pageNumber <= reducer.pageCount){
        newPage = reducer.pageNumber + 1
      }else{
        newPage = reducer.pageNumber
      }
      return {
        pageCount: reducer.pageCount,
        pageNumber: newPage
      }
    case "prev_page":
      if(reducer.pageNumber > 0){
        newPage = reducer.pageNumber - 1
      }else{
        newPage = reducer.pageNumber
      }
      return {
        pageCount: reducer.pageCount,
        pageNumber: newPage
      }
    default:
      throw("Action does not exist")
  }
}

const StudentList = () => {
  const [studentList, setStudentList] = useState<StudentProfileShort[]>([])
  const [pageState, setPageState] = useReducer(pageReducer, pagerState)
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
        <StudentTable data={studentList} onSelectRow={() => {}} isLoading={studentList.length == 0}/>
        <PagerContainer>
        <Pagination
          count={1}
          page={1}
          onChange={() => {}}
        />
        </PagerContainer>
    </Wrapper>
    </Container>
  )
}

export default StudentList