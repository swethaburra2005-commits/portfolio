import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const skills = [
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'WordPress', category: 'Frontend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Maven', category: 'Backend' },
  { name: 'SQL', category: 'Backend' },
  { name: 'Splunk SIEM', category: 'Security' },
  { name: 'Cybersecurity', category: 'Security' },
  { name: 'TF-IDF', category: 'AI / Data' },
  { name: 'Scikit-learn', category: 'AI / Data' },
  { name: 'Matplotlib', category: 'AI / Data' },
  { name: 'NetworkX', category: 'AI / Data' },
  { name: 'Git', category: 'Tools' },
  { name: 'JIRA', category: 'Tools' },
  { name: 'Canva', category: 'Tools' },
  { name: 'Shopify', category: 'Tools' },
];

const categoryColors = {
  'Languages': '#7c6af7',
  'Frontend': '#f59e0b',
  'Backend': '#10b981',
  'Security': '#f43f5e',
  'AI / Data': '#06b6d4',
  'Tools': '#a78bfa',
};

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-orb orb1"></div>
          <div className="hero-orb orb2"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            CS Student · Cybersecurity · AI/ML
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Swetha</span>
            <br />
            <span className="hero-surname">Burra</span>
          </h1>
          <p className="hero-desc">
            A passionate Computer Science student at Mahindra University,
            building secure systems and intelligent solutions. I turn complex
            problems into clean, impactful digital experiences.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">6mo</span>
              <span className="stat-label">Internship</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">6.7</span>
              <span className="stat-label">GPA / 10</span>
            </div>
          </div>
          <div className="hero-actions">
            <NavLink to="/projects" className="btn-primary">View Projects</NavLink>
            <a href="mailto:swethaburra2005@gmail.com" className="btn-secondary">Get in Touch</a>
          </div>
          <div className="hero-socials-row">
            <span className="find-me">Find me on</span>
            <a href="https://github.com/swethaburra" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/swetha-burra" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div className="hero-card">
            <div className="card-photo-placeholder">
              <img src={process.env.PUBLIC_URL + '/mypic.jpeg'} alt="Swetha Burra" />
            </div>
            <div className="card-info">
              <p className="card-name">Swetha Burra</p>
              <p className="card-uni">CS · MAHINDRA UNIVERSITY</p>
              <span className="card-badge">Open to Internships</span>
            </div>
            <div className="card-tag gpa-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              GPA 6.7 / 10
            </div>
          </div>
        </div>
      </section>

      <section className="about-section reveal" id="about">
        <div className="section-inner">
          <div className="section-label">Who I Am</div>
          <h2 className="section-title">About <span className="title-accent">Me</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm an avid reader with a deep appreciation for literature, a fashion enthusiast,
                and a sports fanatic who values staying active and connected. I enjoy spending time
                with friends and family while finding balance between social interactions and personal growth.
              </p>
              <p>
                I would describe myself as an extremely hardworking and optimistic individual
                with a strong sense of determination. I'm a confident extrovert who enjoys collaborating,
                networking, and building meaningful connections. Meeting new people over the years has
                played a significant role in shaping who I am helping me grow both personally and professionally.
              </p>
              <p>
                I'm a capable leader who adapts quickly to change and handles challenges with a positive mindset.
                Communication is one of my strongest skills, and I'm never hesitant to speak up in academic,
                professional, or peer environments. I'm a quick learner who performs well under pressure
                and approaches problems with a solution-oriented mindset.
              </p>
            </div>
            <div className="about-details-card">
              <div className="detail-row">
                <span className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <div>
                  <p className="detail-label">Full Name</p>
                  <p className="detail-value">Swetha Burra</p>
                </div>
              </div>
              <div className="detail-row">
                <span className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.43 2 2 0 0 1 3.92 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.92 6.92l1.09-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <p className="detail-label">Phone</p>
                  <p className="detail-value">+91 9989238624</p>
                </div>
              </div>
              <div className="detail-row">
                <span className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <p className="detail-label">Personal Email</p>
                  <p className="detail-value">swethaburra2005@gmail.com</p>
                </div>
              </div>
              <div className="detail-row">
                <span className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <div>
                  <p className="detail-label">College Email</p>
                  <p className="detail-value">se23ucse170@mahindrauniversity.edu.in</p>
                </div>
              </div>
              <div className="detail-row">
                <span className="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </span>
                <div>
                  <p className="detail-label">University</p>
                  <p className="detail-value">Mahindra University, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="research-section reveal" id="research">
        <div className="section-inner">
          <div className="section-label">What Drives Me</div>
          <h2 className="section-title">Research <span className="title-accent">Interests</span></h2>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Cybersecurity & Threat Intelligence</h3>
              <p>
                I'm fascinated by how attackers think and how we build resilient systems against them.
                From SIEM log analysis and incident response to vulnerability assessments, I'm drawn to
                the challenge of protecting digital infrastructure in real-world environments.
              </p>
              <div className="research-tags">
                <span>SIEM</span><span>Incident Response</span><span>Log Analysis</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="m16.24 7.76-1.42 1.42M7.76 7.76l1.42 1.42M7.76 16.24l1.42-1.42M16.24 16.24l-1.42-1.42"/></svg>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>
                Machine learning gives software the ability to reason beyond hardcoded rules.
                I'm particularly interested in how ML intersects with cybersecurity  from building
                fake news detectors using NLP to anomaly detection models that identify threats
                before they escalate.
              </p>
              <div className="research-tags">
                <span>NLP</span><span>Scikit-learn</span><span>Anomaly Detection</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>Network Science & Social Computing</h3>
              <p>
                Understanding how information  and misinformation  spreads through networks
                is one of the defining challenges of our era. My research into fake news propagation
                using Barabási–Albert network models deepened my interest in graph-based analysis
                and computational social science.
              </p>
              <div className="research-tags">
                <span>NetworkX</span><span>Graph Theory</span><span>Social Networks</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <h3>Full Stack Systems</h3>
              <p>
                I enjoy owning entire products  from database schema to UI. Working with Spring Boot,
                REST APIs, and frontend tooling has taught me how every layer of a system communicates.
                I find real satisfaction in making robust, user-friendly applications from end to end.
              </p>
              <div className="research-tags">
                <span>Spring Boot</span><span>REST APIs</span><span>Java</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section reveal" id="skills">
        <div className="section-inner">
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-chip"
                style={{ '--chip-color': categoryColors[skill.category] || '#7c6af7' }}
              >
                <span className="chip-dot" style={{ background: categoryColors[skill.category] || '#7c6af7' }}></span>
                {skill.name}
              </div>
            ))}
          </div>
          <div className="skills-legend">
            {Object.entries(categoryColors).map(([cat, color]) => (
              <div key={cat} className="legend-item">
                <span className="legend-dot" style={{ background: color }}></span>
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section reveal" id="contact">
        <div className="section-inner">
          <div className="section-label">Say Hello</div>
          <h2 className="section-title">Get in <span className="title-accent">Touch</span></h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <p className="contact-card-label">Name</p>
              <p className="contact-card-value">Swetha Burra</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.43 2 2 0 0 1 3.92 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.92 6.92l1.09-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <p className="contact-card-label">Phone</p>
              <p className="contact-card-value">+91 9989238624</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <p className="contact-card-label">Personal Email</p>
              <p className="contact-card-value">swethaburra2005@gmail.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <p className="contact-card-label">College Email</p>
              <p className="contact-card-value">se23ucse170@mahindrauniversity.edu.in</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <p className="contact-card-label">GitHub</p>
              <p className="contact-card-value">github.com/swethaburra</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <p className="contact-card-label">LinkedIn</p>
              <p className="contact-card-value">linkedin.com/in/swetha-burra</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
