import React from 'react';
import './Home.css';
import IntroButtons from '../../Components/IntroButtons/IntroButtons.jsx';
import Navbar1 from "../../Components/Navbar1/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MySkills from "../../Components/MySkills/MySkills";
import Footer from "../../Components/Footer/Footer";
import MyProjects from "../../Components/MyProjects/MyProjects";
import MyCertificate from "../../Components/MyCertificates/MyCertificate";
import Navbar from '../../Components/Navbar1/Navbar';

function Home() {
    return (
        <div>
            <HeroSection/>
            <MySkills />
            <MyProjects />
            <MyCertificate />
            <Footer />
        </div>
    );
}

export default Home;