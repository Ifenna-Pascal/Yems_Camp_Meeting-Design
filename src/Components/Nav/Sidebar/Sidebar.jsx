import React from 'react';
import { NavLinks, Nav, Link, ButtonContainers, Buttons } from './side';
function Sidebar({ open, toggle }) {
    return (
        <Nav open={open}>
            <NavLinks>
                <Link to="home" onClick={toggle} smooth={true} duration={500} offset={-84} spy={true} exact="true">
                    Home
                </Link>
                <Link to="about" onClick={toggle} smooth={true} duration={500} offset={-84} spy={true} exact="true">
                    About
                </Link>
                <Link to="sections" onClick={toggle} smooth={true} duration={500} offset={-84} spy={true} exact="true">
                    Sections
                </Link>
                <Link to="faq" onClick={toggle} smooth={true} duration={500} offset={-84} spy={true} exact="true">
                    FAQ
                </Link>
                <ButtonContainers>
                    <Buttons to="/payment">Register</Buttons>
                </ButtonContainers>
            </NavLinks>
        </Nav>
    );
}

export default Sidebar;
