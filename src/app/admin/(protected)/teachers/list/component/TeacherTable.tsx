import React, { memo } from "react";
import styled from "styled-components";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from "@mui/material";
import { ColumnHeader, TeacherProfileShort } from "@/util/interface";
import { EmptyArrayGenerator }from "@/util/util_functions";

import { PlaceHolder } from "@/styled-component/place_holder";
import {theme} from "@/styled-component/theme"

const columnTeachers: Array<ColumnHeader> = [
    { id: "teacher_id", label: "Teacher Number", minWidth: 70, align: "center" },
    { id: "teacher_name", label: "Name", minWidth: 70 },
    {
      id: "teacher_gender",
      label: "Gender",
      minWidth: 70,
      align: "center",
    },
    { id: "teacher_advisory_class", label: "Class", minWidth: 70 },
    { id: "teacher_address", label: "Address", minWidth: 70 },
    { id: "teacher_admission_date", label: "Admission Date", minWidth: 70 },
    { id: "teacher_phone", label: "Phone", minWidth: 70 },
  ];
  

const EmptyLabelContainer = styled.div<{ isVisible: boolean }>`
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
  font-size: ${(props) => props.theme.fontSize.medium1};
`;

const TeachersTableLoadingFiller = () => {
  const column = columnTeachers;
  const array = EmptyArrayGenerator(5);
  return (
    <>
      {array.map((_, index) => (
        <TableRow key={index} hover style={{cursor:"pointer"}}>
          {column.map((_, col_index) => (
            <TableCell key={`cell-row-${col_index}`}>
              <PlaceHolder style={{ height: "20px" }} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

const TeachersTable = (args: {
  data: Array<TeacherProfileShort>;
  isLoading: boolean;
  onSelectRow: (event, teacher: TeacherProfileShort) => void;
}) => {
  const column = columnTeachers;
  const { data, isLoading, onSelectRow } = args;

  return (
    <TableContainer
      component={Paper}
      sx={{
        border: "1px solid black",
        width: "100%",
        position: "relative",
        minHeight: "200px",
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
          {isLoading ? (
            <TeachersTableLoadingFiller />
          ) : (
            data.map((teacher) => (
              <TableRow
                className="table-body-row"
                hover
                onClick={(event) => {
                  onSelectRow(event, teacher);
                }}
                key={teacher.teacher_id}
                style={{ cursor: "pointer" }}
              >
                {column.map((col) => {
                  let value;
                  if (col.id === "teacher_dob") {
                    value = teacher[col.id];
                  } else {
                    value = teacher[col.id];
                  }

                  return (
                    <TableCell
                      key={col.id}
                      size="medium"
                      style={{ fontSize: theme.fontSize.medium, textTransform:"capitalize" }}
                    >
                      {value || "N/A"}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <EmptyLabelContainer isVisible={data.length == 0 && !isLoading}>
        <EmptyLabel>No data to display</EmptyLabel>
      </EmptyLabelContainer>
    </TableContainer>
  );
};

export default memo(TeachersTable);
