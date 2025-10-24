import React from 'react';
import './ContactHeroSection.css';
import mailto from '../../assets/images/mail.png';
import linkedin from '../../assets/images/linkedin.png';
import phone from '../../assets/images/phone.png';
import address from '../../assets/images/location.png';
import SocialMediaPlatforms from "../SocialMediaPlatforms/SocialMediaPlatforms";

function ContactHeroSection(props) {
    return (
        <section className="contact-section">
            <div className="contact-section-items">
                <div className="contact-heading">
                    <p>Get in Touch!!</p>
                </div>
                <div className="contact-details">
                    <div className="contact-main-details">
                        <div className="contact-gmail contact-item">
                            <a href="#">
                                <img src={mailto} alt="gmail"/>
                            </a>
                            <p>sanjaysahoo2101 <br/>
                                @gmail.com</p>
                        </div>
                        <div className="contact-linkedin contact-item">
                            <a href="https://www.linkedin.com/in/sanjay-eathakottu-793492337/" target="_blank">
                                <img src={linkedin} alt="linkedin"/>
                            </a>
                            <p>Sanjay Eathakottu</p>
                        </div>
                        <div className="contact-phone contact-item">
                            <img src={phone} alt="phone"/>
                            <p>+91 7569388085</p>
                        </div>
                        <div className="contact-address contact-item">
                            <img src={address} alt="address"/>
                            <p>Rajamundry, AndraPradesh</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="hori-line"></span>
            <SocialMediaPlatforms />
        </section>
    );
}

export default ContactHeroSection;