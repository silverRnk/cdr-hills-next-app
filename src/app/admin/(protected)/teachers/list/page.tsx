"use client"
import {
  Pagination,
} from "@mui/material";
import React, {
  useState,
  useEffect,
  createRef,
} from "react";
import styled from "styled-components";

import {
  SearchInput,
  SearchSelection,
  ButtonSearch as SearchButton,
} from "@/styled-component/search-input-components";
import TeacherTable from "./component/TeacherTable";
import { GradeLevels, Section } from "@/util/interface";
import { TeacherProfileShort } from "@/util/interface";

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
// const Container = styled.div`
//   width: 100%;
//   height: 1000px;
//   border-radius: 10px;
//   box-shadow: 0 0 7px lightgray;
//   background-color: white;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
// `;
const Title = styled.h2`
  ${(props) => props.theme.fontThemes.h2}
  text-align: left;
  width: 100%;
  margin-bottom: 40px;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.75fr 0.75fr 0.5fr;
  grid-template-rows: 75px;
  gap: 30px;
  margin-bottom: 50px;
`;

const InputName = styled(SearchInput)``;
const Selection = styled(SearchSelection)``;

const SelectionItem = styled.option``;

const ButtonSearch = styled(SearchButton)``;

const PagerContainer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
 

function TeachersListPage() {
  const nameRef = createRef<HTMLInputElement>();
  const gradeLevelRef = createRef<HTMLSelectElement>();
  const sectionRef = createRef<HTMLSelectElement>();
  const [sectionList, setSectionList] = useState<Section[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [gradeAndSections, setGradeAndSections] = useState<
    Array<GradeLevels>
  >([]);
  const [teachers, setTeachers] = useState<
    Array<TeacherProfileShort>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const nameParams = ''
  const gradeLevelParams = ''
  const sectionParams = ''
  console.log('params', nameParams, gradeLevelParams, sectionParams)
  useEffect(() => {
    setIsLoading(true)
  }, [currentPage, nameParams, gradeLevelParams, sectionParams]);

  const handlerSearch = async () => {
    const searchParams = `name=${nameRef.current?.value}&`
        + `grade_level=${gradeLevelRef.current?.value}&`
        + `section=${sectionRef.current?.value}`

    console.log(searchParams)
  };

  const handleSelectClass = (e) => {
    const selSection =
      gradeAndSections.filter((grade) => {
        return grade.grade_level_id === e.target.value;
      })[0].sections ?? [];
    setSectionList(selSection);
  };

  const handleSelectRow = (event, teacher:TeacherProfileShort) => {
  
  };

  const handlePageChange = (e, value: number) => {
    setCurrentPage(value)
  };

  return (
    <Container>
      <Wrapper>
      <Title>All Teachers</Title>
      <SearchContainer>
        <InputName ref={nameRef} placeholder="Search by Name" />

        <Selection
          placeholder="Select Class"
          ref={gradeLevelRef}
          onInput={handleSelectClass}
        >
          <SelectionItem value={""}> Select Class </SelectionItem>
          {gradeAndSections.map((item) => (
            <SelectionItem key={item.grade_level_id} value={item.grade_level_id}>
              {item.grade_level}
            </SelectionItem>
          ))}
        </Selection>
        <Selection ref={sectionRef}>
          <SelectionItem value={""}> Select Section </SelectionItem>
          {sectionList.map((section) => (
            <SelectionItem key={`id-${section.id}`} value={section.id}>
              {section.section_name}
            </SelectionItem>
          ))}
        </Selection>
        <ButtonSearch onClick={handlerSearch}>Search</ButtonSearch>
      </SearchContainer>

      <TeacherTable
        data={teachers}
        isLoading={isLoading}
        onSelectRow={handleSelectRow}
      />

      <PagerContainer>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
        />
      </PagerContainer>
      </Wrapper>
    </Container>
  );
}

export default TeachersListPage;
