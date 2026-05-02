import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
                <h2>Service not found</h2>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            <section className="service-detail-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="spec-label">SERVICE {service.number}</span>
                        <h1>{service.title}</h1>
                        <p className="lead">{service.details}</p>
                    </motion.div>
                </div>
            </section>

            <section className="service-detail-content section-padding">
                <div className="container">
                    <div className="service-info-grid">
                        <motion.div 
                            className="spec-cell full-width"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="spec-label">CAPABILITIES</h3>
                            <ul className="service-offers-list">
                                {service.offers.map((offer, index) => (
                                    <li key={index}>
                                        <span className="bullet">•</span> {offer}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div 
                        className="service-actions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link to="/#contact" className="btn btn-primary">DISCUSS PROJECT</Link>
                        <Link to="/" className="btn btn-secondary">VIEW ALL SERVICES</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
