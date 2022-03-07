import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const { name, email, message } = contactInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errMsg) {
      console.log("Submit Form", contactInfo);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrMsg("You entered an invalid email. Please check and try again");
      } else {
        setErrMsg("");
      }
    } else {
      if (!e.target.value.length) {
        setErrMsg(`${e.target.name} is Required!`);
      } else {
        setErrMsg("");
      }
    }
    if (!errMsg) {
      setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
      console.log("Handle Form", contactInfo);
    }
  };

  return (
    <div>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email Dddress
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            defaultValue={email}
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
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errMsg && (
          <div>
            <p className="error">{errMsg}</p>
          </div>
        )}
        <button id="button" type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
