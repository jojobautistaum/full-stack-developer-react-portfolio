import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <p>Contact me</p>
      📞 Phone: 641-435-1034 📧 Email: gjojob@yahoo.com
      <a
        href="https://github.com/jojobautistaum"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        https://github.com/jojobautistaum
      </a>{" "}
      <br />
      <a
        href="https://www.linkedin.com/in/jojo-bautista/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        https://www.linkedin.com/in/jojo-bautista
      </a>
    </div>
  );
}

export default Footer;
