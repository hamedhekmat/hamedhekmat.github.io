import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <img 
            src="/headshot.jpg" 
            alt="Hamed Hekmat" 
            className="headshot"
          />
          <div className="bio">
            <h1>Hamed Hekmat</h1>
            <p>Software Engineer & Developer</p>
            <p>Building innovative solutions and creating impactful projects</p>
          </div>
        </div>
        
        <nav className="social-links">
          <a href="https://github.com/hamedhekmat" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hamedhekmat" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
