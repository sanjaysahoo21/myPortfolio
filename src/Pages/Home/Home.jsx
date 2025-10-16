import React from 'react';
import './Home.css';
import IntroButtons from '../../Components/IntroButtons/IntroButtons.jsx';
import Navbar1 from "../../Components/Navbar1/Navbar";

function Home() {
    return (
        <div>
            <IntroButtons />
            <Navbar1 />
        </div>
    );
}

export default Home;