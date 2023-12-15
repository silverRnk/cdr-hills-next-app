// 'use client'
import { Metadata } from "next/types";
import styles from "./admin.module.css";
import React, { useState } from "react";
import CustomSideBar from "@/components/ui/CustomSideBar";
import { SideNavBar } from "@/components/ui";
import Navbar from "@/components/ui/Navbar/Navbar";
import styled from "styled-components";
import { AdminContextProvider } from "./context";

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
