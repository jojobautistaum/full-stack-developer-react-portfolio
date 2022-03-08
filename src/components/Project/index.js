import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ projectData }) => {
  return (
    <div className="col-md-6 col-12 project-container">
      <div className="project-title-overlay pt-3">
        <h3 className="text-center btn-success project-title">
          {projectData.name}
        </h3>
        <p className="px-3">
          <span className="btn btn-info font-weight-bolder">App link: </span>{" "}
          <br />
          <a
            className="text-decoration-none"
            href={`${projectData.deployedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectData.deployedUrl}
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
            {projectData.githubUrl}
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
