import React from 'react';
import { NavbarContainer, NavList, HamburgerIcon, NavMenu, NavItems, LogoName } from '../style/Header.style';
import {FaBars} from 'react-icons/fa'
export default function Header() {
  return (
      <>
        <NavbarContainer>
          <NavList>
            <LogoName to='/'>Sophoan Meas</LogoName>
            <HamburgerIcon>
              <FaBars/>
            </HamburgerIcon>
            <NavMenu>
              <NavItems to="/about">About</NavItems>
              <NavItems to="/profile">Profile</NavItems>
              <NavItems to="/contact">Contact</NavItems>
              <NavItems to="/resume">Resume</NavItems>
            </NavMenu>
          </NavList>
        </NavbarContainer>
      </>
  );
}