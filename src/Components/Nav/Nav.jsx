import React, { useState, useEffect } from 'react';
import {
    NavContent,
    NavContainer,
    Heading,
    FaTime,
    NavLeft,
    NavRight,
    NavLinks,
    Links,
    Button,
    MobileLogo,
    FaBar,
    ButtonContainer,
} from './style';
import { animateScroll } from 'react-scroll';

function Nav({ open, toggle }) {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 40) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    return (
        <NavContainer scroll={scrollNav}>
            <NavContent>
                <NavLeft onClick={() => animateScroll.scrollToTop()}>
                    <Heading>
                        <span>YE</span>Ms
                    </Heading>
                </NavLeft>
                <NavRight>
                    <MobileLogo onClick={() => toggle()}> {open ? <FaTime /> : <FaBar />}</MobileLogo>
                    <NavLinks>
                        <Links to="home" smooth={true} duration={500} offset={-84} spy={true} exact="true">
                            Home
                        </Links>
                        <Links to="about" smooth={true} duration={500} offset={-84} spy={true} exact="true">
                            About
                        </Links>
                        <Links to="sections" smooth={true} duration={500} offset={-124} spy={true} exact="true">
                            Sections
                        </Links>
                        <Links to="faq" smooth={true} duration={500} offset={-94} spy={true} exact="true">
                            FAQ
                        </Links>
                        <ButtonContainer>
                            <Button to="/register">Register</Button>
                        </ButtonContainer>
                    </NavLinks>
                </NavRight>
            </NavContent>
        </NavContainer>
    );
}

export default Nav;
