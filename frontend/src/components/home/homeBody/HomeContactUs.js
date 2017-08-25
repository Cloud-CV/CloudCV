import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import axios from "axios";
const AJAX_ROOT = process.env.AJAX_ROOT;

const HomeContactUs = props => {
  const sendResponse = event => {
    event.preventDefault();
    let formElement = document.getElementById("contact-us-form");
    let formData = new FormData(formElement);
    axios({
      method: "post",
      url: `${process.env.AJAX_ROOT}/api/web/contact/`,
      data: formData
    }).then(response => {
      if (response.status === 201) {
        formElement.reset();
        document.getElementById("cv-home-form-success").innerHTML =
          response.data.message;
      }
    });
  };
  const CONTACT_US_TITLE = "Contact Us";
  return (
    <div className="cv-home-contact-us cv-container" id="contact-us">
      <h1 className="cv-home-showcase-heading">
        {CONTACT_US_TITLE}
      </h1>
      <form
        className="cv-home-contact-form"
        encType="multipart/form-data"
        action="http://example.com/cgiscript.pl"
        method="post"
        id="contact-us-form"
        onSubmit={sendResponse}
      >
        <section className="cv-home-contact-form-elements">
          <input
            className="cv-input-text"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <br />
          <input
            className="cv-input-text"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            className="cv-input-text"
            type="text"
            name="message"
            placeholder="Message/Query"
            required
          />
          <br />
          <label className="cv-input-label" htmlFor="image">
            Any screenshot/image you would like to add :
          </label>
          <input className="cv-input-file" type="file" name="image" />
        </section>
        <input
          className="cv-button cv-button-dark"
          type="submit"
          name="submit"
          value="Submit"
        />
        <br />
        <span className="cv-home-form-success" id="cv-home-form-success" />
      </form>
    </div>
  );
};

export default HomeContactUs;
