import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HeroSection2 from '../components/HeroSection/index2';
import InfoSection from '../components/InfoSection';
import MenuSection from '../components/MenuSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <HeroSection2 />
            <MenuSection {...homeObjTwo}/>
            
            
        </>
    )
}

export default Home;