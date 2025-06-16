export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2>Contact Me</h2>
        <p className="text-lg">
          I’m excited to connect! Please fill out the form below to get in touch with me.
        </p>
      </div>

      <form
        action="https://formspree.io/f/xgvkbzro" // <-- Replace with your actual Formspree ID
        method="POST"
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
              placeholder="Enter your first name"
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
              placeholder="Enter your last name"
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              placeholder="email@example.com"
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone"
              id="phone-number"
              required
              placeholder="+91"
            />
          </label>
        </div>

        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact--input text-md"
            required
          >
            <option value="">Select One...</option>
            <option value="Internship Opportunity">Internship Opportunity</option>
            <option value="Entry-Level Job Opportunity">Entry-Level Job Opportunity</option>
            <option value="Project Collaboration">Project Collaboration</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>

        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="acceptTerms" id="checkbox" />
          <span className="text-sm">
            I accept the terms and conditions and agree to be contacted.
          </span>
        </label>

        <div>
           <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
