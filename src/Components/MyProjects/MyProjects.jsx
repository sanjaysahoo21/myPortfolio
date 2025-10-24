import React from 'react';
import './MyProjects.css';
import Javascript from "./Javascript/Javascript";
import Java from "./Java/Java";
import ReactJs from "./ReactJs/ReactJs";
import ToogleButtons from "./ToogleButtons/ToogleButtons";


function MyProjects() {
    return (
        <>
            <section className='projects-section'>
                <div className='project-heading'>My Projects Here</div>
                {/*<ToogleButtons />*/}
                <div className='projects-container'>
                    <Javascript />
                    <Java />
                    {/*<ReactJs />*/}
                </div>
            </section>
        </>
    );
}

export default MyProjects;