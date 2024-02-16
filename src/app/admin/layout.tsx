// 'use client'
import { Metadata } from "next/types";
import styles from "./admin.module.css";
import React from "react";

export const metadata: Metadata = {
  title: "Cedar Hills | Admin",
  description: "Cedar Hill Admin Page",
};

// const Container = styled.div`
//     height: 100vh;
//     min-height: 100vh;
//     overflow: hidden;
// `

const AdminRootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  
  return (
    <>
    <div className={styles['admin-container']}>
        {children}
    </div>

    </>
  );
};

export default AdminRootLayout;
