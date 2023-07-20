import React from "react";

import styles from "./page.module.css";
import { Metadata } from "next";
import { Description } from "@mui/icons-material";
import { relative } from "path";
import StyledComponentsRegistry from "../../../styles/styled-component/registry";

export const metadata: Metadata = {
  title: "Cedar Hills | Enrollment",
  description: "enrollment page for cedar hills christian academy",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["page-header-container"]}>
        <h1 className={styles["page-header"]}>Enrollment</h1>
        <svg height="10" width="500">
          <line
            x1="10"
            y1="0"
            x2="210"
            y2="0"
            style={{ stroke: "red", strokeWidth: "5" }}
          />
          <line
            x1="0"
            y1="10"
            x2="200"
            y2="10"
            style={{ stroke: "red", strokeWidth: "5" }}
          />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default layout;
