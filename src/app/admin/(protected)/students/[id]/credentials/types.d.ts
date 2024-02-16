export interface CredentialsInfo {
    id: string;
    fileName: string;
    uploadedDate: string;
    downloadLink: string;
}

export type CredentialsRowHeader =
  | "birth_cert"
  | "form_137"
  | "good_moral"
  | "form_138"
  | "report_card";


export interface RowHeaderShort {
    id: string;
    label: string;
}