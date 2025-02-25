import React, { useState } from "react";
import "./Work.css"; // Make sure to add styles

const projects = [
  {
    id: 1,
    title: "Himachal Pradesh Tour",
    img: "turist.jpg",
    details: "A tourism guide for Himachal Pradesh.",
    github: "https://github.com/sushilkumar003/himachal-pradesh",
  },
  {
    id: 2,
    title: "Bank Website",
    img: "./bank.jpg",
    details: "A modern banking website with online transaction features.",
    github: "https://github.com/sushilkumar003/banksite",
  },
  {
    id: 3,
    title: "Shopping Website",
    img: "./shoping.jpg",
    details: "An e-commerce site with product listings and cart functionality.",
    github: "https://github.com/sushilkumar003/ShoppingSite",
  },
  {
    id: 4,
    title: "Calculator",
    img: "./cal.jpg",
    details: "A simple calculator built with React.",
    github: "https://github.com/sushilkumar003/calculator",
  },
  {
    id: 5,
    title: "JavaScript Quiz",
    img: "JavaScriptQuiz.jpg",
    details: "A quiz game built using JavaScript.",
    github: "https://github.com/sushilkumar003/QuizGame.js",
  },
  
  {
    id: 6,
    title: "Add to Cart",
    img: "AddToCart.jpg",
    details: "A shopping cart feature for e-commerce websites.",
    github: "https://github.com/sushilkumar003/AddToCart",
  },
];

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work-container bd-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="work-img"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.img} alt={project.title} style={{ marginTop: "19px" }} />
            <strong>{project.title}</strong>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function Popup({ project, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={project.img} alt={project.title} className="popup-img" />
        <h2>{project.title}</h2>
        <p>{project.details}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}

export default Work;
