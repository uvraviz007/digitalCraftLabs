import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
                y: -10,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
        >
            <Link to={`/services/${service.id}`} className="card service-card">
                <span className="number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </Link>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What I Offer
                </motion.h2>
                <div className="grid services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
