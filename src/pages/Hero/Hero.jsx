import React from 'react';
import '../Hero/Hero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faMediumM, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import profileImg from '../../assets/imagem.jpeg'; // 📸 Kendi görselini buraya ekle

function Hero() {
    return (
        <div id="home" className="hero-container">
            <div className="hero-content">
                <div className="hero-left">
                <p className="designation typewriter">Information System Engineer</p>
                <h1>
                        Hi, I’m <br />
                        <span>Seda Demirel</span>
                    </h1>
                    <p className="description">
                        I’m a passionate software developer, dedicated to crafting <strong>exceptionally responsive</strong> and <strong>user-friendly</strong> digital experiences.
                        <br/> Turning ideas into reality through clean code, innovation, and meaningful design. <br/>
                        Specialized in responsive design, and performance optimization. Let’s build something amazing together. I’m always open to exciting projects and collaborations.



                    </p>
                    <div className="btn-group">
                        <button className="browse-btn">See More</button>
                    </div>
                </div>

                <div className="hero-right">
                    <img src={profileImg} alt="Profile" className="hero-image" />

                    <div className="social-icons-vertical">
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
            </div>
        </div>
    );
}

export default Hero;
