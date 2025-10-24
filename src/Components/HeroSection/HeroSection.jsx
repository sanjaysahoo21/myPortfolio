import React from 'react';
import './HeroSection.css';
import myRemuse from '../../assets/Resume.pdf';

function HeroSection() {
    return (
        <div className='hero-section-container'>
            <section className="hero-section">
                <div className="hero-items">
                    <div className="welcome-button">Welcome!!...</div>
                    <div className="hero-heading">
                        Building Scalable Web Solutions, <br/>
                        One Line of Code at a Time!
                    </div>
                    <div className="hero-caption">
                        "I love transforming complex problems into simple, elegant digital solutions. <br/>
                        From sleek user interfaces to scalable systems, I create experiences that balance performance,
                        reliability, and design."
                    </div>
                    <div className="resume-caption">
                        <div className="admin-resume second-res-button">
                            <a href={myRemuse} download="sanjay's_Resume.pdf">Download Resume</a>
                        </div>
                        <p>My Resume here!!</p>
                    </div>
                </div>
            </section>
            <div className="hori-line-home"></div>
        </div>
    );
}

export default HeroSection;