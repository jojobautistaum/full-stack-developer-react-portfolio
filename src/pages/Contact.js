import React, { useState } from "react";
import Emailjs from "emailjs-com";
import { validateEmail } from "../utils/helpers";

// Contact Page
function ContactForm() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const [errMsg, setErrMsg] = useState("");

  // Triggered when there is a change in any of the input element in the form
  const handleChange = (e) => {
    if (e.target.type === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrMsg("You entered an invalid email. Please check and try again");
      } else {
        setErrMsg("");
        setContactEmail(e.target.value);
      }
    } else if (e.target.type === "text") {
      if (!e.target.value.length) {
        setErrMsg(`${e.target.name} is Required!`);
      } else {
        setErrMsg("");
        setContactName(e.target.value);
      }
    } else {
      if (!e.target.value.length) {
        setErrMsg(`${e.target.name} is Required!`);
      } else {
        setErrMsg("");
        setContactMessage(e.target.value);
      }
    }
    if (!errMsg) {
      console.log(e.target.name, ": ", e.target.value);
    }
  };

  // Send email to Gmail using emailjs
  function sendEmail(e) {
    e.preventDefault();

    Emailjs.sendForm(
      "service_8lqoomg",
      "template_wwc6uib",
      e.target,
      "WhPULFm1WcpBlMfzF"
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  // Contact Page using form
  return (
    <div className="row">
      <h1>Contact me</h1>
      <div className="contact-me col-9 offset-1 py-3 px-5">
        <form id="contact-form" onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={contactName}
              onBlur={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              defaultValue={contactEmail}
              onBlur={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              defaultValue={contactMessage}
              onBlur={handleChange}
            />
          </div>
          {errMsg && (
            <div>
              <p className="error">{errMsg}</p>
            </div>
          )}
          <button id="button" type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
