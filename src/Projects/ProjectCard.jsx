import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
