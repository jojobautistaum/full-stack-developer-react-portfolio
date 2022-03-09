import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-dark container text-light small">
      <div className="row">
        <div className="col-sm-6 col-12">
          <h6>Contact me</h6>
          <ul>
            <li>📞 Phone: 641-435-1034</li>
            <li>📧 Email: gjojob@yahoo.com</li>
          </ul>
        </div>
        <div className="col-sm-6 col-12">
          <h6>Follow me</h6>
          <a
            href="https://github.com/jojobautistaum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/jojo-bautista/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a
            href="https://twitter.com/Jojo_FSD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>
        <div className="col-12 text-center small">
          <p>Portfolio: Jojo Bautista © 2022 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
