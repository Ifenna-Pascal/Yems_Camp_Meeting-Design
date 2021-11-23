import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav/Nav';
import Sidebar from '../Components/Nav/Sidebar/Sidebar';
import Hero from '../SubPages/Hero';
import Event from '../SubPages/Events';
import Welcome from '../SubPages/Welcome';
import FAQ from '../SubPages/FAQ';
import CountDown from '../SubPages/CountDown';
import Footer from './Footer';
import { Scroll, ScrollBtn } from '../Components/Nav/style';

function Home() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const showScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setScroll(true);
            console.log('yes');
        } else if (scrolled <= 300) {
            setScroll(false);
            console.log('no');
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', showScroll);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <Nav toggle={toggle} open={open} />
            <Sidebar open={open} toggle={toggle} />
            <ScrollBtn style={{ display: scroll ? 'inline' : 'none' }} onClick={scrollToTop}>
                <Scroll onClick={scrollToTop} />
            </ScrollBtn>
            <Hero id="home" />
            <Welcome />
            <CountDown />
            <Event />
            <FAQ />
            <Footer />
        </>
    );
}

export default Home;
