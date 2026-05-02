import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
                <div className="logo">
                    <img src={logo} alt="DigitalCraft Logo" />
                </div>
                <p>&copy; 2026 DigitalCraft Studio. All rights reserved.</p>
                <div className="socials">
                    <a href="#">TWITTER</a>
                    <a href="#">LINKEDIN</a>
                    <a href="#">DRIBBBLE</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
