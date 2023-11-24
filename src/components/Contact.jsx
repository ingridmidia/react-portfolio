function Contact() {
  return (
    <form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Name" required />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label htmlFor="message">
        Message
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Your message"
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
