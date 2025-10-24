import React from 'react';
import './CollageDetails.css';
import collegePic from '../../assets/images/collage.webp';

function CollageDetails(props) {
    return (
        <section className="college-info">
            <div className="college-info-items">
                <div className="college-image">
                    <div className="college-image-inner">
                        <img src={collegePic} alt="college"/>
                    </div>
                </div>
                <div className="college-content">
                    <div className="college-name">
                        <p>Aditya Collage of Engineering & Technology</p>
                    </div>
                    <div className="college-branch">
                        <p>Bachelor of Engineering & Technology</p>
                    </div>
                    <div className="college-year">
                        <p>2023-2027</p>
                    </div>
                    <div className="college-location">
                        <p>Aditya Nagar, ADB Rd, Surampalem, Andhra Pradesh 533437</p>
                    </div>
                    <div className="college-academic">
                        <div className="college-cgpa">
                            <h2>CGPA</h2>
                            <p>7.6</p>
                        </div>
                        <div className="college-percentage">
                            <h2>Percentage</h2>
                            <p>68</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CollageDetails;