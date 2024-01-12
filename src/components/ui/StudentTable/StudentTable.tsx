"use client"

import React, {memo} from "react";
import styled from "styled-components";
import { StudentProfileShort } from "../../../util/interface";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
  TablePagination,
  Pagination,
} from "@mui/material";
import { EmptyArrayGenerator } from "@/util/util_functions";
import { PlaceHolder } from "../../../styled-component/place_holder";


const EmptyLabelContainer = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
})<{ isVisible: boolean }>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const EmptyLabel = styled.span`
  font-size: 20px;
`;

/* font-size: ${(props) => props.theme.fontSize.medium1}; */

const RowBodyStyle: React.CSSProperties = {
  cursor: "pointer" ,
}

type textAlignments = "left" | "right" | "center" | "justify";

interface ColumnHeader {
    id: string;
    label: string;
    minWidth: number;
    align?: textAlignments | null;
    format?: () => any | null;
}

const columnAllStudents: Array<ColumnHeader> = [
    { id: "std_id", label: "Student ID", minWidth: 70, align: "center" },
    { id: "std_name", label: "Name", minWidth: 70, align: "left"},
    { id: "std_gender", label: "Gender", minWidth: 70, align: "center"},
    { id: "std_grade", label: "Class", minWidth: 70, align: "center"},
    { id: "std_section", label: "Section", minWidth: 70, align: "center"},
    { id: "std_status", label: "Status", minWidth: 70, align: "center"},
    { id: "std_date_of_birth", label: "Date of Birth", minWidth: 70, align: "center"},
    { id: "parents_phone", label: "Parent's Phone No.", minWidth: 70, align: "left"}
  ];

const LoadingRows = (
  <>
    {EmptyArrayGenerator(5).map((_, index) => (
      <TableRow key={index} className="table-body-row" hover style={RowBodyStyle}>
        {columnAllStudents.map(() => (
          <TableCell key={index} >
            <PlaceHolder style={{height: "20px"}} />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

const StudentsTable = (args: {
  data: Array<StudentProfileShort>;
  onSelectRow: (_:any, student: StudentProfileShort) => void;
  isLoading: boolean;
}) => {
  const column = columnAllStudents;
  const { data, isLoading, onSelectRow } = args;

  return (
    <TableContainer
      component={Paper}
      sx={{
        border: "1px solid black",
        width: "100%",
        position: "relative",
        minHeight: "300px"
      }}
    >
      <Table size="medium">
        <TableHead>
          {column.map((col) => {
            return (
              <TableCell
                key={col.id}
                style={{
                  minWidth: col.minWidth,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                }}
              >
                {col.label}
              </TableCell>
            );
          })}
        </TableHead>
        <TableBody>
          {isLoading
            ? (LoadingRows)
            : data.map((student) => (
                <TableRow
                  className="table-body-row"
                  hover
                  onClick={(event) => {
                    onSelectRow(event, student);
                  }}
                  key={student.std_id}
                  style={RowBodyStyle}
                >
                  {column.map((col) => {
                    let value:string = student[col.id as keyof StudentProfileShort];

                    //IF col
                    // if (col.id === "std_date_of_birth") {
                    //   value = student[col.id];
                    // } else {
                    //   value = student[col.id];
                    // }

                    return (
                      <TableCell
                        key={`${student.std_id}_${col.id}`}
                        size="medium"
                        style={{
                          textAlign: col.align || "left",
                          textTransform: "capitalize",
                        //   fontSize: theme.fontSize.medium
                        fontSize: '15px'
                        }}
                      >
                        {value || "N/A"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <EmptyLabelContainer isVisible={data.length == 0 && !isLoading}>
                  <EmptyLabel>No data to display</EmptyLabel>
      </EmptyLabelContainer>
    </TableContainer>
  );
};

export default StudentsTable;