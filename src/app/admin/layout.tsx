'use client'
import { Metadata } from "next/types";
import styles from "./admin.module.css";
import React, { useState } from "react";
import CustomSideBar from "@/components/ui/CustomSideBar";
import { SideNavBar } from "@/components/ui";
import Navbar from "@/components/ui/Navbar/Navbar";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Cedar Hills | Admin",
  description: "Cedar Hill Admin Page",
};

const Container = styled.div`
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
`

const Left = styled.div`
  width: inherit;
  background-color: ${props => props.theme.colors.primary};
  height: 100%;

`

const Right = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const NavbarContainer = styled.div``

const ContentWrapper = styled.div``

const AdminRootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  
  return (
    <>
      <Container>
        <Left>
          <SideNavBar></SideNavBar>
        </Left>
        <Right>
          <NavbarContainer>
            <Navbar/>
          </NavbarContainer>
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </Right>
        {/* <div className={styles["nav-bar-container"]}>
          <Navbar/>
        </div>
        <div className={styles["container"]}>
          <div className={styles["side-navbar"]}>
            <SideNavBar/>
          </div>
          <div>{children}</div>
        </div> */}
      </Container>
    </>
  );
};

export default AdminRootLayout;
