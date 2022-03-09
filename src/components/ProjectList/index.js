import React from "react";
import Project from "../Project";

// Import the project images into a variable
import quiz from "../../assets/images/projects/bible-character-quiz.jpg";
import password from "../../assets/images/projects/password-generator.jpg";
import note from "../../assets/images/projects/note-taker.jpg";
import reddit from "../../assets/images/projects/reddit-light.jpg";
import blog from "../../assets/images/projects/tech-blog.jpg";
import weather from "../../assets/images/projects/weather-dashboard.jpg";
import budget from "../../assets/images/projects/personal-budget-tracker.jpg";
import scheduler from "../../assets/images/projects/work-day-scheduler.jpg";

// List of all the projects
export default function ProjectList() {
  const projects = [
    {
      name: "The Tech Blog",
      image: blog,
      githubUrl: "https://github.com/jojobautistaum/tech-blog",
      deployedUrl: "https://tranquil-ridge-17708.herokuapp.com/",
    },
    {
      name: "Personal Budget Tracker",
      image: budget,
      githubUrl: "https://github.com/jojobautistaum/personal-budget",
      deployedUrl: "https://transaction-personal-budget.herokuapp.com/",
    },
    {
      name: "Word Day Scheduler",
      image: scheduler,
      githubUrl: "https://github.com/jojobautistaum/work-day-scheduler",
      deployedUrl: "https://jojobautistaum.github.io/work-day-scheduler/",
    },
    {
      name: "Note Taker",
      image: note,
      githubUrl: "https://github.com/jojobautistaum/note-taker",
      deployedUrl: "https://safe-atoll-95629.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      image: weather,
      githubUrl: "https://github.com/jojobautistaum/weather-dashboard",
      deployedUrl: "https://jojobautistaum.github.io/weather-dashboard/",
    },
    {
      name: "Password Generator",
      image: password,
      githubUrl: "https://github.com/jojobautistaum/passwd-generator",
      deployedUrl: "https://jojobautistaum.github.io/passwd-generator/",
    },
    {
      name: "Bible Character Quiz",
      image: quiz,
      githubUrl: "https://github.com/jojobautistaum/bible-character-quiz",
      deployedUrl: "https://jojobautistaum.github.io/bible-character-quiz/",
    },
    {
      name: "Reddit Light",
      image: reddit,
      githubUrl: "https://github.com/Feortegas/reddit-clone",
      deployedUrl: "https://afternoon-tundra-62298.herokuapp.com/",
    },
  ];

  // Render each project in the Portfolio page
  return (
    <div className="row d-flex project-list p-3">
      {projects.map((eachProject) => {
        return <Project projectData={eachProject} key={eachProject} />;
      })}
    </div>
  );
}
