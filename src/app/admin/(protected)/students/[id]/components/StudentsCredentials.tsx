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
// import { credentialsColumn } from "../utils/ColumnLabels";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, FormLabel } from "@mui/material";
import { StudentProfileLong } from "@/util/interface";
// import { credentialsRowHeader } from "../utils/objects";
import { theme } from "@/styled-component/theme";
import { PlaceHolder } from "@/styled-component/place_holder";

const CredentialsContainer = styled.div`
  width: 100%;
  padding: 10px 15px;
  display:grid;
`;

const Title = styled.h4`
  width: 100%;
  ${props => props.theme.fontThemes.h3}
  margin-block-end: 1em;
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



const StudentsCredentials = () => {
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [credentials, setCredentials] =
    useState<Record<string, CredentialsInfo>>();
  const [uploadCount, setUploadCount] = useState(0)

    //TODO Implement Get Request Method for StudentsCredentials
  useEffect(() => {}, [uploadCount])

  const handlerUpload = (e, id) => {

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

export default StudentsCredentials