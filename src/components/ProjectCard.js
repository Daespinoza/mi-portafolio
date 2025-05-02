import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/components/ProjectCard.css';

function ProjectCard({ title, description, image, technologies, githubLink, liveLink }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="placeholder-image">
            <span>{title[0]}</span>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
              <FaGithub /> Código
            </a>
          )}
          
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;