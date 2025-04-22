import React from 'react'
import '../Hero/Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faMediumM, faPinterestP } from "@fortawesome/free-brands-svg-icons";

function Hero() {
    return (
        <div id='home' className="hero-container" >
            <div className="background-circle"></div> {/*Arka planı turuncu daire*/}
            <div className="hero-content">
                <div className="text-content">
                    <p className="designation">Information System Engineer</p>
                    <h1>Hello! I am <br /><span>Seda Demirel</span></h1>
                    <p className="description">Is is a long established fact that a reader will be distracted by the readable content of page when at its layout.
                    </p>
                    <button className='browse-btn'>See More</button>
                </div>
                <div className="image-content">
                </div>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="icon">
                    <FontAwesomeIcon icon={faMediumM} />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="icon">
                    <FontAwesomeIcon icon={faPinterestP} />
                </a>
            </div>
        </div>
    )
}

export default Hero