import React from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../../utils/projects";

const Projects = () => {
  return (
    <>
      <Container>
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              title={item.nameProject}
              image={item.previeImage}
              project={item.linkProject}
              repo={item.linkRepo}
              logosTechs={item.techs}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Projects;
