import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (!isHome) return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.div 
                className="m-stripe"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
            >
                <div className="m-stripe-blue-light"></div>
                <div className="m-stripe-blue-dark"></div>
                <div className="m-stripe-red"></div>
            </motion.div>
            <nav className={scrolled || !isHome ? 'scrolled' : ''}>
            <Link to="/" className="logo">
                <img src={logo} alt="DigitalCraft Logo" />
            </Link>
            
            <ul className="nav-links">
                <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    {isHome ? (
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Expertise</a>
                    ) : (
                        <Link to="/#services">Expertise</Link>
                    )}
                </motion.li>
                <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    {isHome ? (
                        <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a>
                    ) : (
                        <Link to="/#work">Work</Link>
                    )}
                </motion.li>
                <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <Link to="/about">About</Link>
                </motion.li>
            </ul>

            <div className="nav-actions">
                <a href="#contact" className="btn btn-primary" onClick={(e) => { if(isHome) { e.preventDefault(); scrollToSection('contact'); } }}>
                    Get in Touch
                </a>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
