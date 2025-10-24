import React from 'react';
import './AboutHeroSection.css';
import profile from '../../assets/images/profile.jpg';

function AboutHeroSection(props) {
    return (
        <section className="about-hero-section">
            <div className="about-hero-items">
                <div className="about-profile">
                    <img src={profile} alt="profile"/>
                </div>
                <div className="about-name">
                    <p>Sanjay Eathakottu</p>
                </div>
                <div className="about-roles">
                    <div className="web-design-role about-role-item">Web design</div>
                    <div className="frontend-developer-role about-role-item">Frontend Developer</div>
                    <div className="sql-nosql-role about-role-item">SQL & NoSQL</div>
                </div>
                <div className="about-content">
                    <p>
                        I am a Computer Science and Engineering undergraduate with a strong passion
                        for building creative and efficient digital solutions. My interests span
                        across web design, frontend development, and working with both SQL & NoSQL databases.
                        I enjoy turning ideas into interactive, user-friendly applications while constantly
                        learning new technologies to sharpen my skills.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutHeroSection;