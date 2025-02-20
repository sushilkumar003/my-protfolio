import React from 'react';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container bd-grid">
        <form action="" className="contact-form">
          <input
            type="text"
            placeholder="Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Message"
            className="contact-input"
            rows="10"
            required
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="contact-button button"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
