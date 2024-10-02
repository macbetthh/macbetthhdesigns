import React from 'react';
import { useSpring, animated } from 'react-spring';

const projects = [
  { title: 'Project 1', description: 'A cool project', link: '#' },
  { title: 'Project 2', description: 'Another awesome project', link: '#' },
  { title: 'Project 3', description: 'Yet another project', link: '#' },
];

const Projects = () => {
    return (
      <section id="projects" className="py-20 px-4 md:px-8"> {/* Add padding here */}
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    );
  };

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = React.useState(false);

  // Animation for hover effect
  const props = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hovered ? '0px 10px 30px rgba(0, 0, 0, 0.2)' : '0px 0px 0px rgba(0, 0, 0, 0)',
  });

  return (
    <animated.div
      style={props}
      className="border rounded p-4 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="font-bold">{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} className="text-blue-500">
        View Project
      </a>
    </animated.div>
  );
};

export default Projects;
