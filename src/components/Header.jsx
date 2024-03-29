import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"

import Navbar from './Nav';
let logo = require('../images/logo.png')

const Header = () => {
  return (
   <MainHeader>
        <NavLink to="/">
            <img src={logo} alt="logo img" className='logo'/>
        </NavLink>
        <Navbar/>
   </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 7rem;
  }


`;

export default Header