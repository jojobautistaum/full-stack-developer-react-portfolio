import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Display a project image with overlay of project title, github and deployed link
const Project = ({ projectData }) => {
  return (
    <div className="col-lg-6 col-12 project-container">
      <div className="project-title-overlay p-3 text-wrap">
        <h3 className="text-center btn-success project-title">
          {projectData.name}
        </h3>
        <p className="px-3">
          <a
            className="text-decoration-none app-url"
            href={`${projectData.deployedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-plane-departure"></i>{" "}
            <span className="app-link">{projectData.deployedUrl}</span>
          </a>
        </p>
        <p>
          <a
            className="text-decoration-none px-3"
            href={`${projectData.githubUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{" "}
            <span className="github-link">{projectData.githubUrl}</span>
          </a>
        </p>
      </div>
      <img
        src={projectData.image}
        alt={projectData.name}
        key={projectData.name}
        className="project-image pb-3"
      />
    </div>
  );
};

export default Project;
