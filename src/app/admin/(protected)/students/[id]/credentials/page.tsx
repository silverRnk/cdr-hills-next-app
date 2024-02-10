'use client'
import React, { useEffect, useState } from "react";
import styled from "styled-components";
//Mui Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, FormLabel } from "@mui/material";
import { StudentProfileLong } from "@/util/interface";
import { theme } from "@/styled-component/theme";
import { PlaceHolder } from "@/styled-component/place_holder";
import { textAlignments } from "@/util/types";

const CredentialsContainer = styled.div`
  width: 100%;
  padding: 10px 15px;
  display:grid;
`;

const Title = styled.h4`
  width: 100%;
  ${props => props.theme.fontThemes.h4}
  color:black;
  margin-bottom: 10px;
`

const Form = styled.form`
`;

interface CredentialsInfo {
    id: string;
    fileName: string;
    uploadedDate: string;
    downloadLink: string;
}

type CredentialsRowHeader =
  | "birth_cert"
  | "form_137"
  | "good_moral"
  | "form_138"
  | "report_card";


interface RowHeaderShort {
    id: string;
    label: string;
}

const credentialsRowHeader: Array<RowHeaderShort> = [
    {id: "birth_cert", label: "Birth Certificate"},
    {id: "form_137", label: "Form 137"},
    {id: "good_moral", label: "Good Moral"},
    {id: "form_138", label: "Form 138"},
    {id: "report_card", label: "Report Card"}
]

interface ColumnHeader {
  id: string;
  label: string;
  minWidth: number;
  align?: textAlignments | null;
  format?: () => any | null;
}

const credentialsColumn: Array<ColumnHeader> = [
  {
    id: "type",
    label: "Upload Type",
    minWidth: 50,
    align: null,
    format: () => null,
  },
  {
    id: "upload",
    label: "",
    minWidth: 75,
    align: null,
    format: () => null,
  },
  {
    id: "file_name",
    label: "File Name",
    minWidth: 75,
    align: null,
    format: () => null,
  },
  {
    id: "date",
    label: "Upload Date",
    minWidth: 75,
    align: null,
    format: () => null,
  },
  {
    id: "download",
    label: "",
    minWidth: 25,
    align: "center"
  }
];


const Credentials = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [credentials, setCredentials] =
    useState<Record<string, CredentialsInfo>>();
  const [uploadCount, setUploadCount] = useState(0)

    //TODO Implement Get Request Method for StudentsCredentials
  useEffect(() => {}, [uploadCount])

  const handlerUpload = (e:any, id:string|number) => {

  } 

  return (
    <CredentialsContainer>
      <Title>Credentials</Title>
      <Form>
        <Table>
          <TableHead>
            <TableRow>
              {credentialsColumn.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    textAlign: "center",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {credentialsRowHeader.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  scope="row"
                  className="credentials-row-header"
                >
                  {row.label}
                </TableCell>
                <TableCell>
                  <Button
                    disabled={isLoading}
                    variant="contained"
                    component="label"
                    onClick={(e) => handlerUpload(e, row.id)}
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: "white",
                    }}
                  >
                    Upload
                    <input
                      hidden
                      type="file"
                      name={row.id}
                      id={row.id}
                    />
                  </Button>
                </TableCell>
                <TableCell className="credentials-cell">
                  {isLoading ? (
                    <PlaceHolder style={{ height: "1rem" }} />
                  ) : (
                    credentials?.[row.id].fileName ?? "N/A"
                  )}
                </TableCell>
                <TableCell className="credentials-cell">
                {isLoading ? (
                    <PlaceHolder style={{ height: "1rem" }} />
                  ) : (
                    credentials?.[row.id].uploadedDate ?? "N/A"
                  )}
                </TableCell>
                <TableCell>
                  <a download href={credentials?.[row.id].downloadLink}>
                    <FileDownloadIcon />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Form>
    </CredentialsContainer>
  );
}

export default Credentials