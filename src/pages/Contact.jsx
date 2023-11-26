import "../styles/Contact.css";

import { useState } from "react";

function Contact() {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          onBlur={(e) => {
            setName(e.target.value.trim() === "");
          }}
        />
        <p className={name ? "error-message-visible" : "error-message-hidden"}>
          You must enter a name
        </p>
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          onBlur={(e) => {
              const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
              setEmail(!emailRegex.test(e.target.value.trim()));
          }}
        />
        <p className={email ? "error-message-visible" : "error-message-hidden"}>
          You must enter a valid email
        </p>
      </label>
      <label htmlFor="message">
        Message
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Your message"
          required
          onBlur={(e) => {
            setMessage(e.target.value.trim() === "");
          }}
        />
        <p
          className={message ? "error-message-visible" : "error-message-hidden"}
        >
          You must enter a message
        </p>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
