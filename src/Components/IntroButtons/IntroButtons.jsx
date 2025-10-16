import React from 'react';
import './IntroButtons.css';
import myRemuse from '../../assets/Resume.pdf';

function IntroButtons(props) {
    return (
        <section className="admin-buttons">
            <div className="admin-intro">
                <div className="admin-name">Sanjay Eathakottu</div>
                <div className="admin-resume">
                    <a href={myRemuse} download="sanjay's_Resume.pdf">Download Resume</a>
                </div>
            </div>
        </section>
    );
}

export default IntroButtons;