import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>
            <i class="fa-solid fa-layer-group"></i> Full Stack Developer
          </h2>
          <p>Download my resume</p>
        </div>
        <div className="col-6">
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
        <div className="col-6">
          <h3>Back-end Proficiences</h3>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-file-code"></i>
              </span>
              APIs
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-node-js"></i>
              </span>
              Node
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-brands fa-node"></i>
              </span>
              Express
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-database"></i>
              </span>
              MySQL, Sequelize, ORM
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
              REST
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
