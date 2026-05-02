import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <img src={logo} alt="DigitalCraft Logo" className="footer-logo" />
                    <p className="footer-tagline">ENGINEERING DIGITAL EXCELLENCE.</p>
                </div>

                <div className="footer-nav">
                    <span className="spec-label">NAVIGATION</span>
                    <ul className="footer-links">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><a href="/#services">EXPERTISE</a></li>
                        <li><a href="/#work">WORK</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <span className="spec-label">SOCIAL</span>
                    <ul className="footer-links">
                        <li><a href="https://www.linkedin.com/in/ravi-sharma-6b5b42235/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                        <li><a href="https://www.instagram.com/digital.craftlabs/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                        <li><a href="https://github.com/uvraviz007" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <span className="spec-label">LOCATION</span>
                    <p>JAIPUR, INDIA</p>
                    <p>EST. 2026</p>
                </div>
            </div>

            <div className="container footer-bottom">
                <div className="m-stripe-mini">
                    <div className="m-stripe-blue-light"></div>
                    <div className="m-stripe-blue-dark"></div>
                    <div className="m-stripe-red"></div>
                </div>
                <p>&copy; 2026 DIGITALCRAFT STUDIO. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
