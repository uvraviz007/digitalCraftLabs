import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult("TRANSMITTING...");

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("MESSAGE TRANSMITTED SUCCESSFULLY");
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact">
            <div className="container contact-container">
                <motion.div
                    className="contact-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="spec-label">GET IN TOUCH</span>
                    <h2>READY TO START YOUR ENGINE?</h2>
                    <p>Have an idea that needs high-performance execution? Drop us a line. Our team of engineers is ready to help you scale.</p>

                    <div className="contact-specs">
                        <div className="spec-cell mini">
                            <span className="spec-label">HEADQUARTERS</span>
                            <span className="spec-value-small">JAIPUR, INDIA</span>
                        </div>
                        <div className="spec-cell mini">
                            <span className="spec-label">RESPONSE TIME</span>
                            <span className="spec-value-small">{"< 24 HOURS"}</span>
                        </div>
                        <div className="spec-cell mini">
                            <span className="spec-label">EMAIL ADDRESS</span>
                            <span className="spec-value-small">uvraviz26@gmail.com</span>
                        </div>
                        <div className="spec-cell mini">
                            <span className="spec-label">DIRECT LINE</span>
                            <span className="spec-value-small">+91 9315594490</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <form onSubmit={handleSubmit} className="engineered-form">
                        <input type="hidden" name="from_name" value="DigitalCraft Portfolio" />
                        <input type="hidden" name="replyto" value="email" />

                        <div className="form-group">
                            <label className="spec-label">01 / NAME</label>
                            <input type="text" name="name" placeholder="YOUR FULL NAME" required />
                        </div>
                        <div className="form-group">
                            <label className="spec-label">02 / EMAIL</label>
                            <input type="email" name="email" placeholder="YOUR EMAIL ADDRESS" required />
                        </div>
                        <div className="form-group">
                            <label className="spec-label">03 / PROJECT DETAILS + CONTACTS DETAILS PLEASE</label>
                            <textarea name="message" placeholder="TELL US ABOUT YOUR DIGITAL GOALS" rows="4" required></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                            {!isSubmitting && (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            )}
                        </button>

                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="form-status"
                                style={{
                                    marginTop: '1rem',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: result.includes('SUCCESS') ? 'var(--m-blue-light)' : '#ff4444',
                                    letterSpacing: '1px'
                                }}
                            >
                                [ STATUS: {result} ]
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
