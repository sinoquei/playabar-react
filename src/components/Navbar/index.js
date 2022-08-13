import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks 
} from './NavElements';
import PlayaLogo from '../../app/assets/img/playa-logo.png'

const Navbar = ({ toggle }) => {
  return (
   <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' className='my-2'><img src={PlayaLogo} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='info'>INFO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='menu'>MENU</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='events'>EVENTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='press'>PRESS</NavLinks>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
   </>
  )
}

export default Navbar;