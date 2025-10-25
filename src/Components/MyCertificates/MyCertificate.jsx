import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MyCertificate.css';
import javaCertificate from '../../assets/images/javaFunCf.png';
import pythonCertificate from '../../assets/images/pythonCf.png';
import htmlCertificate from '../../assets/images/htmlCf.png';
import cssCertificate from '../../assets/images/cssCf.png';
import javaScriptCertificate from '../../assets/images/javaScriptCf.png';

function MyCertificate(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        swipe: true,
        draggable: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 464,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

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
        },
        {
            id: 4,
            name: 'css',
            image: cssCertificate,
            alt: 'CSS Certificate',
        },
        {
            id: 5,
            name: 'javascript',
            image: javaScriptCertificate,
            alt: 'JavaScript Certificate',
        }
    ];

    return (
        <div className='carousel'>
            <div className="carousel-heading">My Certificates</div>
            <div className='carousel-container'>
                <Slider {...settings}>
                    {certificates.map((certificate) => (
                        <div key={certificate.id} className='certificate-slide'>
                            <div className='certificate-item'>
                                <img 
                                    src={certificate.image} 
                                    alt={certificate.alt} 
                                    className={`certificate-image ${certificate.name}-certificate`}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default MyCertificate;