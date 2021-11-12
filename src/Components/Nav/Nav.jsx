import React, {useState, useEffect} from 'react';
import {NavContent, NavContainer, Heading, FaTime, NavLeft, NavRight, NavLinks, Link, Button, MobileLogo, FaBar, ButtonContainer} from "./style";
 
function Nav({open, toggle}) {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = ()=>{
        if(window.scrollY >= 40){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
    }, []);
    return (
        <NavContainer scroll = {scrollNav}>
            <NavContent>
                <NavLeft><Heading><span>YE</span>Ms</Heading></NavLeft>
            <NavRight>
                <MobileLogo onClick={()=> toggle()}> {open ? <FaTime/> : <FaBar/>}</MobileLogo>
                <NavLinks>
                    <Link>About</Link>
                    <Link>Features</Link>
                    <Link>Contact</Link>
                    <ButtonContainer>
                        <Button>Register</Button>
                    </ButtonContainer>
                </NavLinks>
            </NavRight>
            </NavContent>
        </NavContainer>
    )
}

export default Nav
