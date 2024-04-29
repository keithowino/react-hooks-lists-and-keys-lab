import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const tools = technologies.map((tool) => {
    return <span key={tool}>{tool}</span>;
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {tools}
      </div>
    </div>
  );
}

export default ProjectItem;
