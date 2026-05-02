import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            CRAFTING <span className="text-gradient">DIGITAL</span> EXPERIENCES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead"
          >
            DigitalCraft started with a simple belief — build things that actually matter.
          </motion.p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-grid">
            {/* LEFT SIDE - JOURNEY */}
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>The Journey</h2>
              <p>
                Founded by an engineer from MNNIT Allahabad and now based in Jaipur,
                this journey began with late-night coding, random ideas, and a strong
                urge to create something impactful.
              </p>
              <p>
                What started as experiments and side projects quickly turned into a
                mission — helping startups and businesses bring their ideas to life
                with clean design, scalable systems, and meaningful user experiences.
              </p>
              <p>
                Today, DigitalCraft is powered by a team of curious minds — not perfect,
                not traditional, but creative enough to turn bold ideas into real
                products that work.
              </p>
            </motion.div>

            {/* RIGHT SIDE - WHY CHOOSE US */}
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Why Choose Us</h2>
              <p>
                We don’t just deliver projects — we build products like they’re our own.
              </p>
              <p>
                No unnecessary complexity. No over-promises. Just clean code,
                thoughtful design, and solutions that actually work in the real world.
              </p>
              <p>
                We focus on clarity, speed, and long-term scalability — so what you
                build today doesn’t break tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-culture section-padding">
        <div className="container">
          <motion.div
            className="culture-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Serious Work, Not-So-Serious Vibes</h2>
            <p className="lead">We’re serious about our work… but not about everything. Our team runs on:</p>
          </motion.div>

          <div className="culture-grid">
            <motion.div className="culture-item" whileHover={{ y: -5 }}>
              <span className="emoji">☕</span>
              <h3>Coffee</h3>
              <p>A lot of it. The primary fuel for our digital machines.</p>
            </motion.div>
            <motion.div className="culture-item" whileHover={{ y: -5 }}>
              <span className="emoji">🎧</span>
              <h3>Good Music</h3>
              <p>From deep house to lo-fi, rhythm drives our code.</p>
            </motion.div>
            <motion.div className="culture-item" whileHover={{ y: -5 }}>
              <span className="emoji">😂</span>
              <h3>Random Memes</h3>
              <p>Essential for high-pressure deployments and debugging sessions.</p>
            </motion.div>
            <motion.div className="culture-item" whileHover={{ y: -5 }}>
              <span className="emoji">💡</span>
              <h3>Crazy Ideas</h3>
              <p>The ones that shouldn't work, but somehow always do.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>READY TO ACCELERATE?</h2>
          <a href="/#contact" className="btn btn-primary">START A PROJECT</a>
        </div>
      </section>
    </div>
  );
};

export default About;