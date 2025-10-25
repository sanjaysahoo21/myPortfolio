import React from 'react';
import {useState} from 'react';
import './MyProjects.css';
import Javascript from "./Javascript/Javascript";
import Java from "./Java/Java";
import Reactjs from "./React/Reactjs";


function MyProjects() {
    const [isToggled, setIsToggled] = useState(0);
    const projects = [
        {
            title: 'javascript',
            component: Javascript,
        },
        {
             title: 'java',
             component: Java,
        },
        {
            title:'react',
            component: Reactjs,
         }
    ]
    const ToogledTab = projects[isToggled].component;

    console.log(isToggled);
    console.log(ToogledTab);
    return (
        <>
            <section className='projects-section'>
                <div className='project-heading'>My Projects Here</div>
                <div className='toogle-buttons'>
                    {projects.map((project, index) => {
                        return(
                            <div key={index} className={`${isToggled === index ? 'active' : ''}`} onClick={() => setIsToggled(index)}>
                                {project.title}
                            </div>
                        )
                    })}
                </div>
                <div className='projects-container'>
                    <ToogledTab />
                </div>
            </section>
        </>
    );
}

export default MyProjects;