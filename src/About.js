import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about-container bd-grid">
        <div className="about-img">
          <img src="/myimage.jpg" alt="Profile" />
        </div>

        <div>
          <h2 className="about-subtitle"> MERN Stack Developer</h2>
          <p className="about-text">
            As a passionate MERN stack developer, I specialize in building dynamic and responsive web applications. With a strong foundation in MongoDB, Express, React, and Node.js, I can create full-stack solutions that are scalable, maintainable, and performant. My goal is to develop user-centric applications that deliver seamless experiences and solve real-world problems.
          </p>
          <p className="about-text">
            I thrive on challenges and enjoy learning new technologies to stay ahead of the curve in the ever-evolving field of web development. Whether it's building RESTful APIs, implementing responsive front-end interfaces with React, or working on back-end services with Node.js and MongoDB, I'm always eager to take on exciting projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
