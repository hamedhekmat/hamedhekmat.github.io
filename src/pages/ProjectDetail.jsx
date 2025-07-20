import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="not-found">
            <h2>Project not found</h2>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/" className="back-btn">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/" className="back-btn">
          ← Back to Projects
        </Link>
        
        <div className="project-header">
          <div className="project-image-large">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="project-info-large">
            <h1>{project.title}</h1>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.longDescription}</p>
            
            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-details">
          <div className="technologies-section">
            <h3>Technologies Used</h3>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="features-section">
            <h3>Key Features</h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
