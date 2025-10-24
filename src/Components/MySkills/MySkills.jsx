import React from 'react';
import './MySkills.css';
// import myRemuse from '../../assets/Resume.pdf';
// import {useState} from 'react';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import java from '../../assets/images/java.png';
import javascript from '../../assets/images/javascript.png';
import sql from '../../assets/images/sql.png';
import mongodb from '../../assets/images/mongodb.png';
import reactjs from '../../assets/images/reactjs.png';
import nodejs from '../../assets/images/nodejs.png';


function MySkills() {
    const cardsInformationLeft = [
        {
            image: java,
            title: "JAVA",
            classList: "java-img",
        },
        {
            image: html,
            title: "HTML",
            classList: "html-img",
        },
        {
            image: css,
            title: "CSS",
            classList: "css-img",
        },
        {
            image: javascript,
            title: "JavaScript",
            classList: "js-img",
        },
    ];
    const cardsInformationRight = [
        {
            image: sql,
            title: "SQL",
            classList: "sql-img",
        },
        {
            image: mongodb,
            title: "MongoDB",
            classList: "mongodb-img",
        },
        {
            image: reactjs,
            title: "React JS",
            classList: "reactjs-img",
        },
        {
            image: nodejs,
            title: "Node JS",
            classList: "nodejs-img",
        }
    ];
    return (
        <div className='skills-container'>
            <div className="skills-heading">My Skills Here</div>
            <section className='skills-section'>
                <div className='skill-coloumn-left'>
                    {cardsInformationLeft.map((card, index) => {
                        return (
                            <div className="skill skill-left">
                                <div className="skill-img">
                                    <img src={card.image} alt="" className={card.classList}/>
                                </div>
                                <div className="skill-caption">
                                    <p>{card.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='skill-coloumn-right'>
                    {cardsInformationRight.map((card, index) => {
                        return (
                            <div className="skill skill-right">
                                <div className="skill-img">
                                    <img src={card.image} alt="" className={card.classList}/>
                                </div>
                                <div className="skill-caption">
                                    <p>{card.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default MySkills;