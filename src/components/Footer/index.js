import React from "react";
// import Mailto from "react-mailto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

function Footer() {
  return (
    <div className="footer-dark container text-light small">
      <div className="row pt-1">
        <div className="col-sm-6 col-12">
          <h6>Contact me</h6>
          <ul>
            <li>📞 Phone: 641-435-1034</li>
            <li>
              📧 Email:{" "}
              <span>
                <Mailto email="gjojob@yahoo.com" obfuscate={true}>
                  gjojob@yahoo.com
                </Mailto>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-12">
          <h6>
            Follow me
            <span>
              <a
                href="https://github.com/jojobautistaum"
                target="_blank"
                rel="noopener noreferrer"
                className="ps-3"
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
            </span>
          </h6>
          <p>Portfolio: Jojo Bautista © 2022 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
