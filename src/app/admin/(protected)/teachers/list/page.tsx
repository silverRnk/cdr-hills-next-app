"use client"
import React from 'react'
import styled from 'styled-components'

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

const TeacherListPage = () => {
  return (
    <Container>
        <Wrapper>

        </Wrapper>
    </Container>
  )
}

export default TeacherListPage