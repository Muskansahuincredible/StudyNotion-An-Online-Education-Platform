import React from 'react';

// Dummy project data
const projectData = [
  {
    title: 'React To-Do List',
    description: 'A simple to-do list application built with React.',
    technologies: ['React', 'CSS'],
    link: 'https://github.com/yourusername/react-todo-list'
  },
  {
    title: 'Weather App',
    description: 'A weather application that fetches data from a weather API.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/yourusername/weather-app'
  },
  {
    title: 'Personal Blog',
    description: 'A personal blog website built with Django.',
    technologies: ['Django', 'Bootstrap'],
    link: 'https://github.com/yourusername/personal-blog'
  }
];

const Project = () => {
  return (
    <div className="project-list">
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, i) => (
              <span key={i} className="technology">{tech}</span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
};

export default Project;