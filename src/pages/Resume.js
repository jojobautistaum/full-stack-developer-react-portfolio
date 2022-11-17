import React from "react";
import resume from "../assets/resume/Resume - Jojo Bautista FSD.pdf";

// Full Stack Developer skills and Resume Page
export default function Resume() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>
            <i className="fa-solid fa-layer-group"></i> Full Stack Developer
          </h2>
          <p>
            Download my resume
            <span>
              <a href={resume} download="Resume_Jojo_Bautista">
                <i className="fa fa-download"></i>
              </a>
            </span>
          </p>
        </div>
        <div className="col-md-5 col-10 front-end p-3">
          <h3>Front-end Proficiences</h3>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-html5"></i>
              </span>
              HTML
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-css3-alt"></i>
              </span>
              CSS
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-js"></i>
              </span>
              JavaScript
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-spinner"></i>
              </span>
              jQuery
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-laptop-code"></i>
              </span>
              Responsive design
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-react"></i>
              </span>
              React
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-bootstrap"></i>
              </span>
              Bootstrap
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-sitemap"></i>
              </span>
              MVC
            </li>
          </ul>
        </div>
        <div className="col-md-5 col-10 offset-md-1 back-end p-3">
          <h3>Back-end Proficiences</h3>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-java"></i>
              </span>
              Java
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-java"></i>
              </span>
              Maven, Spring boot, Spring MVC
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-java"></i>
              </span>
              JUnit, MockMvc, Mockito, TDD
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-docker"></i>
              </span>
              Microservices, Containerization
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-node-js"></i>
              </span>
              Node.js, Express.js  
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-database"></i>
              </span>
              MySQL, Sequelize, ORM, JPA
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-database"></i>
              </span>
              NoSQL, MongoDB, Mongoose
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-code"></i>
              </span>
              REST APIs
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-cloud-arrow-down"></i>
              </span>
              GraphQL
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-signal"></i>
              </span>
              PWA
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
