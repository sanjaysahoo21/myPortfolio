import React from 'react';
import './SocialMediaPlatforms.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import {faFacebook, faGithub, faLinkedin, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


function SocialMediaPlatforms(props) {
    return (
        <div className="contact-social-media">
            <div className="social-media-items">
                <div className="contact-instagram">
                    <a href="https://www.instagram.com/_sanju____21/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="contact-facebook">
                    <a href="https://www.facebook.com/profile.php?id=61578914524180" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
                <div className="contact-github">
                    <a href="https://github.com/sanjaysahoo21" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMediaPlatforms;