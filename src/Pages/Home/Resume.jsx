import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h1 className="resume-heading">My Resume</h1>

        {/* Embedded PDF View */}
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="resume-pdf"
          width="100%"
          height="700px"
        >
          <p>
            Your browser does not support PDFs.{' '}
            <a href="/resume.pdf" download>Download the resume instead</a>.
          </p>
        </object>

        {/* Download Button */}
        <a href="/resume.pdf" download>
          <button className="resume-download-btn">Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
