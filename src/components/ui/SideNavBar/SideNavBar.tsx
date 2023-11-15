"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
//Mui
import { Dashboard, Backpack } from "@mui/icons-material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import PieChartIcon from "@mui/icons-material/PieChart";
import LogoutIcon from "@mui/icons-material/Logout";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

//Local Icon
import StudentIcon from "@/components/svg/StudentIcon";
import ParentIcon from "@/components/svg/ParentIcon";
import TeacherIcon from "@/components/svg/TeacherIcon";
import BookIcon from "@/components/svg/BookIcon";
import AccountIcon from "@/components/svg/AccountIcon";



//
import './style.css'
import styled from "styled-components";

const SideBarHeader = styled.div`
  display: flex;
  height: 100px;
  margin-bottom: 10px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: yellow;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  display: inline;
`;

const SideNavBar = () => {

  const handleLogout = () => {}

  return (
    <Sidebar>
      <SideBarHeader>
        <Logo src="/cedarhills.png"/>
      </SideBarHeader>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        
        <MenuItem
            icon={<Dashboard/>}
            component={<Link href={"admin/dashboard"} />}
          >
            Dashboard
          </MenuItem>
          <SubMenu
            label="Students"
            icon={<StudentIcon height={30} color="white" />}
          >
            <MenuItem
              className="sub-menu-item"
              component={<Link href="/students/all" />}
            >
              All Students
            </MenuItem>
            <MenuItem
              className="sub-menu-item"
              component={<Link href="/students/add_student" />}
            >
              Add Student
            </MenuItem>

            <MenuItem
              className="sub-menu-item"
              component={<Link href="/students/student_admit_form" />}
            >
              Student Promotion
            </MenuItem>
          </SubMenu>

          <MenuItem 
          icon={<ParentIcon height={30} width={30}/>}
          >Parents</MenuItem>
          <SubMenu label="Teachers"
           icon={<TeacherIcon height={30} />}
           >
            <MenuItem
              className="sub-menu-item"
              component={<Link href="/teachers/all" />}
            >
              All Teachers
            </MenuItem>
            <MenuItem
              className="sub-menu-item"
              component={<Link href="/teachers/add" />}
            >
              Add Teacher
            </MenuItem>
          </SubMenu>
          <SubMenu label="Account"
           icon={<AccountIcon height={30} />}
           >
            <MenuItem className="sub-menu-item" icon={<Backpack />}>
              {" "}
              Pie charts{" "}
            </MenuItem>
            <MenuItem className="sub-menu-item" icon={<Dashboard />}>
              {" "}
              Line charts{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu label="Subjects"
           icon={<BookIcon height={30} />}
           >
            <MenuItem
              className="sub-menu-item"
              component={<Link href={"/subjects/all"} />}
            >
              All Subjects
            </MenuItem>
            <MenuItem
              className="sub-menu-item"
              component={<Link href={"/subjects/activities"} />}
            >
              Activities
            </MenuItem>
          </SubMenu>

          <SubMenu label="Charts" icon={<PieChartIcon style={{height:'30px'}} />}>
            <MenuItem className="sub-menu-item" icon={<Backpack />}> Pie charts </MenuItem>
            <MenuItem className="sub-menu-item" icon={<Dashboard />}> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem icon={<LogoutIcon />} onClick={handleLogout}>
            {" "}
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
  );
};

export default SideNavBar;
