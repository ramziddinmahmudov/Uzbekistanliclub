import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projects';
import "./ProjectList.css";

const ProjectList = () => {
    return (
        <div className="project-list">
            <h1>Loyihalar</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
