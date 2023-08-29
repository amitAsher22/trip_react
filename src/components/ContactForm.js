import React from "react";
import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us !</h1>
      <form>
        <input placeholder="name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="message" rows="4"></textarea>
        <button>Send Messahe</button>
      </form>
    </div>
  );
}

export default ContactForm;
