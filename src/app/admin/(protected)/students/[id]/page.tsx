'use client'
import { PlaceHolder } from '@/styled-component/place_holder';
import { StudentProfileLong } from '@/util/interface';
import React, { useState } from 'react'
import styled from 'styled-components';


const Table = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-left: 10px;
`;
const TableBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const RowHeader = styled.span`
  flex: 1;
  font-size: 1.25rem;
  padding-left: 10px;
  font-weight: bold;
`;
const Cell = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
`;

type Keys = keyof StudentProfileLong;

interface ColumnHeaderShort {
    id: string;
    label: string;
  }

const studentDetailsHeader: Array<ColumnHeaderShort> = [
  { id: "id_number", label: "Student Number" },
  { id: "name", label: "Name" },
  { id: "gender", label: "Gender" },
  { id: "religion", label: "Religion" },
  { id: "date_of_birth", label: "Date of Birth" },
  { id: "e_mail", label: "Email" },
  { id: "father_name", label: "Father's Name" },
  { id: "mother_name", label: "Mother's Name" },
  { id: "father_occupation", label: "Father's Occupation" },
  { id: "admission_date", label: "Admission Date" },
  { id: "class", label: "Grade" },
  { id: "section", label: "Section" },
];

interface RowHeaderShort {
    id: string;
    label: string;
  }

const StudentDetails = () => {

  const [data, setData] = useState<StudentProfileLong|null>(null)
  const [isLoading, setLoading] = useState(true)

  return (
    <Table role="table">
      <TableBody role="rowgroup">
        {studentDetailsHeader.map((row) => (
          <Row role="row" key={row.id}>
            <RowHeader role="rowheader">{row.label}:</RowHeader>
            {isLoading ? (
              <Cell>
                <PlaceHolder style={{height: "20px"}} />
              </Cell>
            ) : (
              <Cell>{!data ? "N/A" : data[row.id]}</Cell>
            )}
          </Row>
        ))}
      </TableBody>
    </Table>
  )
}

export default StudentDetails