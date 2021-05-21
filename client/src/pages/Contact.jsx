import React, { Component } from "react";
import ContactContent from "../components/ContactContent";
import Navbar from "../components/Navbar";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <ContactContent />
      </div>
    );
  }
}

export default Contact;
