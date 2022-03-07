import React from "react";

const Project = ({ projectData }) => {
  return (
    <div className="flex-row">
      <h3>{projectData.name}</h3>
      <img
        src={projectData.image}
        alt={projectData.name}
        key={projectData.name}
      />
    </div>
  );
};

export default Project;
