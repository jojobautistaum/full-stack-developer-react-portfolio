import React from "react";

// Tab navigation and display page of selected tab
function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="navbar navbar-expand">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home"
                  ? "nav-link active btn btn-success"
                  : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active btn btn-success"
                  : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active btn btn-success"
                  : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active btn btn-success"
                  : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
