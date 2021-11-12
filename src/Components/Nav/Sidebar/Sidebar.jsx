import React from 'react'
import {NavLinks, Nav, Link, ButtonContainers, Buttons} from "./side";
function Sidebar({open}) {
    return (
        <Nav open= {open}>
            <NavLinks>
                    <Link>About</Link>
                    <Link>Features</Link>
                    <Link>Contact</Link>
                    <Link>About</Link>
                    <ButtonContainers>
                    <Buttons>Register</Buttons>
                    </ButtonContainers>
            </NavLinks>
        </Nav>
    )
}

export default Sidebar
