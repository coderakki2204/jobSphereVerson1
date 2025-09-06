import React from "react";

const ContactUs = () => {
  const handleDataFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    // console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleDataFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            name="message"
            rows={10}
            placeholder="Enter your message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
