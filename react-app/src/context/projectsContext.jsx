import React, { createContext, useState } from "react";
import axios from "axios";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const addProject = async (project) => {
    try {
      const response = await axios.post("/api/projects", project);
      setProjects((prevProjects) => [...prevProjects, response.data]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectId)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, fetchProjects, addProject, deleteProject }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
