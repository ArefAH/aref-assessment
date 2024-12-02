import React, { useContext, useEffect } from "react";
import Project from "../components/Project";
import { ProjectsProvider, ProjectsContext } from "../context/projectsContext";

const Projects = () => {
  const { projects, fetchProjects, addProject, deleteProject } = useContext(ProjectsContext);

  useEffect(() => {
    fetchProjects();
  }, []);
  
  return (
    <div className="projects-container">
      {projects.map((p) => (
        <Project project={p} key={p.id} />
      ))}
    </div>
  );
};

export default Projects;
