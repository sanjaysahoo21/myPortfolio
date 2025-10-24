import React from 'react';
import './About.css';
import AboutHeroSection from '../../Components/AboutHeroSection/AboutHeroSection';
import CollageDetails from "../../Components/CollageDetails/CollageDetails";
import InternshipDetails from "../../Components/InternshipDetails/InternshipDetails";
import Footer from "../../Components/Footer/Footer";

function About(props) {
    return (
        <>
            <AboutHeroSection />
            <CollageDetails />
            <InternshipDetails />
            <Footer />
        </>
    );
}

export default About;