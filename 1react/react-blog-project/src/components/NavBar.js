import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavBar = () => (
    <Navbar>
        <Navbar.Brand>
            <a href="#home">Start-Bootstrap</a>
        </Navbar.Brand>
        <Nav classID='NavLinkList'>
            <NavItem className='NavLinks' eventKey={1} href="#">Home</NavItem>
            <NavItem className='NavLinks' eventKey={2} href="#">About</NavItem>
            <NavItem className='NavLinks' eventKey={3} href="#">Sample Post</NavItem>
            <NavItem className='NavLinks' eventKey={4} href="#">Contact</NavItem>
        </Nav>
    </Navbar>
)
        
export default NavBar;
