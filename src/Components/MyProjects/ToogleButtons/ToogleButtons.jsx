import React from 'react';
import './ToogleButtons.css';


function ToogleButtons() {
    return (
        <div className="toogle-buttons">
            <div className="frontend-button js-t-button js-projects-active">Frontend</div>
            <div className="java-button js-t-button">Java</div>
        </div>
    );
}

export default ToogleButtons;