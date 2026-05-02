import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero-video.mp4';

const Hero = () => {
    return (
        <header className="hero" id="home">
            <video 
                className="hero-video-bg" 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text" style={{ textAlign: 'center', width: '100%' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        WE CRAFT <span className="text-gradient">DIGITAL</span> EXPERIENCES.
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        style={{ margin: '0 auto 3.5rem auto' }}
                    >
                        A premium design & development studio building next-gen digital products that drive results.
                    </motion.p>
                    
                    <motion.div 
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        style={{ justifyContent: 'center' }}
                    >
                        <a href="#work" className="btn btn-primary">Explore Work</a>
                        <a href="#contact" className="btn btn-secondary">Start Project</a>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
