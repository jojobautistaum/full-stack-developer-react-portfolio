import React from "react";
import Project from "../Project";
import quiz from "../../assets/images/projects/bible-character-quiz.jpg";
import password from "../../assets/images/projects/password-generator.jpg";
import readme from "../../assets/images/projects/professional-readme-generator.jpg";
import reddit from "../../assets/images/projects/reddit-light.jpg";
import blog from "../../assets/images/projects/tech-blog.jpg";
import weather from "../../assets/images/projects/weather-dashboard.jpg";
import riders from "../../assets/images/projects/weather-riders.jpg";
import scheduler from "../../assets/images/projects/work-day-scheduler.jpg";

export default function ProjectList() {
  const projects = [
    {
      name: "The Tech Blog",
      image: blog,
      githubUrl: "",
    },
    {
      name: "Weather Dashboard",
      image: weather,
      githubUrl: "",
    },
    {
      name: "Password Generator",
      image: password,
      githubUrl: "",
    },
    {
      name: "Bible Character Quiz",
      image: quiz,
      githubUrl: "",
    },
    {
      name: "Word Day Scheduler",
      image: scheduler,
      githubUrl: "",
    },
    {
      name: "Professional README Generator",
      image: readme,
      githubUrl: "",
    },
    {
      name: "Reddit Light",
      image: reddit,
      githubUrl: "",
    },
    {
      name: "Weather Riders",
      image: riders,
      githubUrl: "",
    },
  ];

  return (
    <div>
      {projects.map((eachProject) => {
        return <Project projectData={eachProject} />;
      })}
    </div>
  );
}
