import React, { Component } from "react";
import "../css/contactContent.css";

class ContactContent extends Component {
  state = {};
  render() {
    return (
      <div className="contact-content-container">
        <div className="contact-form">
          <form action="">
            <div className="form-row">
              <label htmlFor="fname">First Name :</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-row">
              <label htmlFor="lname">Last Name :</label>
              <input type="text" placeholder="Your Surname" />
            </div>
            <div className="form-row">
              <label htmlFor="e-mail">E-mail :</label>
              <input type="text" placeholder="Your E-mail" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Your Message :</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="form-row">
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactContent;
