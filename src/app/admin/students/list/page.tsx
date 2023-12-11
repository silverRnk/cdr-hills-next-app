'use client'
// import StudentTable from '@/components/ui/StudentTable/StudentTable'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import dynamic from 'next/dynamic'
import { StudentProfileShort } from '@/util/types'
import { setInterval } from 'timers/promises'
import { setTimeout } from 'timers'
import { studentListShort } from '../data'
 
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

const StudentList = () => {
  const [studentList, setStudentList] = useState<StudentProfileShort[]>([])

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log('Hello timmer'),
      setStudentList(studentListShort);
    }, 3000);

  }, [])

  return (
    <Container>
    <Wrapper>
        <StudentTable data={studentList} onSelectRow={() => {}} isLoading={studentList.length == 0}/>
    </Wrapper>
    </Container>
  )
}

export default StudentList