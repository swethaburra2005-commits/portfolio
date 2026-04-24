import React, { useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    id: '01',
    type: 'BACKEND · FULL STACK',
    title: 'Finance Tracker App — Arete',
    period: 'Feb 2026 – Present',
    tech: ['Java 8', 'Spring Boot', 'REST APIs', 'Maven', 'Spring Cloud', 'Git'],
    bullets: [
      'Developed a backend-driven Finance Tracker application using Java 8 and Spring Boot.',
      'Built RESTful APIs to manage income and expense records with JSON-based communication.',
      'Implemented scalable, microservice-ready architecture using Spring Cloud.',
      'Managed dependencies via Maven and version control using Git.',
    ],
    github: 'https://github.com/swethaburra',
    color: '#7c6af7',
  },
  {
    id: '02',
    type: 'AI · MACHINE LEARNING',
    title: 'Fake News Propagation Analyser',
    period: 'Sep 2025 – Dec 2025',
    tech: ['Python', 'TF-IDF', 'Passive Aggressive Classifier', 'NetworkX', 'Matplotlib', 'Scikit-learn'],
    bullets: [
      'Built a machine learning model using TF-IDF + Passive Aggressive Classifier achieving 99.77% accuracy in detecting fake vs real news.',
      'Simulated news diffusion using Barabási–Albert network model to study propagation patterns.',
      'Evaluated the model using confusion matrix, precision, recall, and learning curves.',
      'Visualized network spread and model metrics using Matplotlib and NetworkX.',
    ],
    github: 'https://github.com/swethaburra',
    color: '#06b6d4',
  },
  {
    id: '03',
    type: 'FULL STACK · FRONTEND',
    title: 'Social Media Dashboard',
    period: 'Nov 2025 – Dec 2025',
    tech: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
    bullets: [
      'Implemented full CRUD operations for a content calendar with post scheduling, editing, and deletion functionality.',
      'Built a clean, responsive dashboard interface for managing social media content.',
      'Integrated REST API communication for real-time data management.',
    ],
    github: 'https://github.com/swethaburra',
    color: '#f59e0b',
  },
  {
    id: '04',
    type: 'INTERNSHIP · CYBERSECURITY',
    title: 'Cybersecurity Analyst — Arete',
    period: 'Jul 2025 – Present',
    tech: ['Splunk SIEM', 'Log Analysis', 'Incident Response', 'Vulnerability Assessment', 'JIRA'],
    bullets: [
      'Monitored and analyzed security events using Splunk SIEM, identifying potential threats through log analysis and correlation.',
      'Assisted in incident responses, vulnerability assessment, and documentation to support security operations.',
      'Contributed to risk mitigation strategies and security operations documentation for multiple client companies.',
      'Worked on debugging and hardening online systems for various enterprise clients.',
    ],
    github: null,
    color: '#f43f5e',
  },
  {
    id: '05',
    type: 'WEB DEVELOPMENT · NGO',
    title: 'Learning Space Foundation — NGO Website',
    period: 'Mar 2025 – May 2025',
    tech: ['WordPress', 'Elementor', 'CSS', 'Shopify'],
    bullets: [
      'Built and designed the NGO\'s official website using WordPress, Elementor, and CSS.',
      'Improved content presentation and delivered a responsive, user-friendly web platform.',
      'Helped raise awareness for the organization through effective digital presence.',
    ],
    github: null,
    color: '#10b981',
  },
];

function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll('.proj-reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-bg">
          <div className="proj-orb"></div>
        </div>
        <div className="projects-hero-content">
          <div className="section-label">My Work</div>
          <h1 className="projects-title">
            My <span className="title-accent">Projects</span>
          </h1>
          <p className="projects-subtitle">
            A collection of things I've built — backend systems, ML models, security work, and more.
          </p>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card proj-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-card-header">
              <div className="project-meta-left">
                <span className="project-num" style={{ color: project.color }}>
                  {project.id}
                </span>
                <span className="project-type" style={{ color: project.color }}>
                  {project.type}
                </span>
              </div>
              <span className="project-period">{project.period}</span>
            </div>

            <h2 className="project-title">{project.title}</h2>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-divider" style={{ background: project.color }}></div>

            <ul className="project-bullets">
              {project.bullets.map((b, i) => (
                <li key={i}>
                  <span className="bullet-dot" style={{ background: project.color }}></span>
                  {b}
                </li>
              ))}
            </ul>

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
