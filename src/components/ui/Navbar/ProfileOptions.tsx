
import React, { useState } from 'react'
import { MenuButtonWrapper } from '../Cards/styles'
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import styled from 'styled-components'
import { Menu, MenuItem } from '@mui/material';
import { ArrowUpwardOutlined } from '@mui/icons-material';
import NavbarStyle from "./navbar.module.css";

const Wrapper = styled.div`
    position: relative;
`

const Button = styled('button')
.withConfig({shouldForwardProp: (props) => {return props !== 'isOpen'}})<{isOpen:boolean}>`
    all: unset;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    rotate: ${props => props.isOpen ? '180deg': '0deg'};
    transition: all 250ms ease-in-out;
`

const ProfileOptions = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Wrapper>
        <Button isOpen={open} onClick={e => handleClick(e)}>
            <ArrowDropDownOutlinedIcon/>
        </Button>
        <Menu 
        MenuListProps={{
            style:{width: '200px'}
        }}
        className={NavbarStyle["nav-profile-option"]}
        open={open} onClose={handleClose} anchorEl={anchorEl}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
            <MenuItem>Option 4</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </Wrapper>
  )
}

export default ProfileOptions