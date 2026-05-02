import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const WorkCard = ({ project, index }) => {
    return (
        <motion.a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card work-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
        >
            <div className="card-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                    <span className="overlay-btn">
                        View Project 
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="card-info">
                <h3>{project.title}</h3>
                <div className="tech-tags">
                    {project.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
};

const Work = () => {
    return (
        <section id="work" className="work">
            <div className="container container-large">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>
                <div className="grid work-grid">
                    {projectsData.map((project, index) => (
                        <WorkCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
