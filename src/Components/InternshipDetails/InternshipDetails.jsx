import React from 'react';
import './InternshipDetails.css';
import Thubpic from '../../assets/images/TechnicalHub.png';
import InternshipCertificate from '../../assets/internship_certificate.pdf';

function InternshipDetails(props) {
    return (
        <section className="internship-section">
            <div className="internship-section-inner">
                <div className="internship-heading">
                    <p>My Internship Here</p>
                </div>
                <div className="internship-items">
                    <div className="internship-item-left">
                        <div className="internship-image">
                            <img src={Thubpic} alt="internship"/>
                        </div>
                    </div>
                    <div className="internship-item-right">
                        <div className="internship-content">
                            <p>
                                I completed my internship at Technical Hub Pvt. Ltd. as a
                                Web Developer Intern, where I gained hands-on experience in
                                designing and developing responsive user interfaces. During this internship,
                                I worked on a real-time frontend project, which enhanced my
                                skills in HTML, CSS, and JavaScript, as well as applying
                                modern practices in UI/UX design.
                                This experience not only strengthened my technical expertise but also taught
                                me the importance of teamwork, version control, and delivering
                                production-ready web solutions.
                            </p>
                            <div className="internship-button">
                                <button className="learn-more-button">
                                    <a href={InternshipCertificate}
                                       download="sanjay's_internship_certificate">Download certificate</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InternshipDetails;