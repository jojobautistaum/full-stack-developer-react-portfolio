import React from "react";
import projects from "../ProjectList";

export default function Portfolio() {
  return (
    <div>
      <h3>Project List</h3>
      {projects.name.map((project) => (
        <div>
          {project.name}
          {/* <h3>{project.name}</h3>
          <img src={project.image} alt="Project List" /> */}
        </div>
      ))}
    </div>
  );
}
