import React, { useState } from 'react';
import Nav from '../Components/Nav/Nav';
import Sidebar from '../Components/Nav/Sidebar/Sidebar';
import Hero from '../SubPages/Hero';
import Event from '../SubPages/Events';
import Welcome from '../SubPages/Welcome';
import FAQ from '../SubPages/FAQ';
import CountDown from '../SubPages/CountDown';
import Footer from './Footer';

function Home() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <Nav toggle={toggle} open={open} />
            <Sidebar open={open} toggle={toggle} />
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
