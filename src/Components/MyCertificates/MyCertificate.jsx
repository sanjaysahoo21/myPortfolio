import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './MyCertificate.css';
import javaCertificate from '../../assets/images/javaFunCf.png';
import pythonCertificate from '../../assets/images/pythonCf.png';
import htmlCertificate from '../../assets/images/htmlCf.png';
import cssCertificate from '../../assets/images/cssCf.png';
import javaScriptCertificate from '../../assets/images/javaScriptCf.png';


function MyCertificate(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        }
        , tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        }
        , mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    }
    const certificates = [
        {
            id: 1,
            name: 'java',
            image: javaCertificate,
            alt: 'Java Certificate',
        },
        {
            id: 2,
            name: 'python',
            image: pythonCertificate,
            alt: 'Python Certificate',
        },
        {
            id: 3,
            name: 'html',
            image: htmlCertificate,
            alt: 'HTML Certificate',
        },{
            id: 4,
            name: 'css',
            image: cssCertificate,
            alt: 'CSS Certificate',
        },{
            id: 5,
            name: 'js-1',
            image: javaScriptCertificate,
            alt: 'JavaScript Certificate',
        }
    ]
    return (
        <div className='carousel'>
            <div className="carousel-heading">My Certificates</div>
            <div className='carousel-container'>
                <Carousel responsive={responsive}
                          infinite={true}
                          showDots={true}
                          autoPlay={true}
                          containerClass='carousel-container'
                          pauseOnHover={true}
                >
                    {certificates.map((certificate) => (
                        <div key={certificate.id} className='certificate-item'>
                            <img src={certificate.image} alt={certificate.alt} className={`certificate-image ${certificate.name}-certificate`}/>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default MyCertificate;