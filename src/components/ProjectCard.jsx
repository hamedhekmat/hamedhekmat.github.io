import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.slug}`} className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <span className="view-project">View Project</span>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-tags">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
