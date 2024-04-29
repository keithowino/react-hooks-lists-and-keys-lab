import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const apps = projects.map((app) => {
    return <ProjectItem key={app.id} name={app.name} about={app.about} technologies={app.technologies}/>;
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {apps}
      </div>
    </div>
  );
}

export default ProjectList;
