import React from 'react';
import './Javascript.css';
import oryxLogo from '../../../assets/images/Logo-oryx.png';
import rps from '../../../assets/images/rps.png';

function Javascript() {
    const oryxPage = () => {
        window.open('https://sanjaysahoo21.github.io/Oryx/')
    }
    const rpsPage = () => {
        window.open('https://sanjaysahoo21.github.io/RockPaperScissors/')
    }
    return (
        <div id="javascript-container" className="project-content active">
            <div className="oryx-card frontend-card project-card-ani-left">
                <div className="oryx-logo">
                    <img src={oryxLogo} alt="oryx"/>
                </div>
                <div className="oryx-caption">
                    <p>Oryx</p>
                </div>
            </div>
            <div className="oryx-content frontend-card project-card-ani-right">
                <div className="oryx-content-inner">
                    Oryx is a comprehensive platform designed to facilitate skill exchange, mentorship, and
                    career development. The platform connects learners with mentors and peers, providing
                    tools for collaborative learning and professional growth through AI-powered career
                    assistance and job platform integration.
                </div>
                <div>
                    <button className="learn-more-button"
                            onClick={oryxPage}>view
                    </button>
                </div>
            </div>
            <div className="rps-content frontend-card project-card-ani-left">
                <div className="rps-content-inner">
                    Rock Paper Scissors is a classic game that can be played with a computer or two players.
                    The game is played by two players, each choosing from a rock, paper, or scissors.
                    The winner is determined by a simple rule: rock beats scissors, scissors beats paper, and paper
                    beats rock.
                </div>
                <div>
                    <button className="learn-more-button"
                            onClick={rpsPage}>view
                    </button>
                </div>
            </div>
            <div className="rps-card frontend-card project-card-ani-right">
                <div className="rps-logo">
                    <img src={rps} alt="rps"/>
                </div>
                <div className="rps-caption">
                    <p>Rock Paper Scissors</p>
                </div>
            </div>
        </div>
    );
}

export default Javascript;