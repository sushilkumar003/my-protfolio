import React from 'react';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container bd-grid">
        <div>
          <h2 className="skills-subtitle">MERN Stack Developer</h2>
          <p className="skills-text">
            I specialize in the MERN stack, and I'm passionate about building dynamic web applications. Here's a breakdown of my skills:
          </p>

          {/* Skill 1: HTML5 */}
          <div className="skills-data">
            <div className="skills-names">
              <i className='bx bxl-html5 skills-icon'></i>
              <span className="skills-name">HTML5</span>
            </div>
            <div>
              {/* <span className="skills-percentage">95%</span> */}
            </div>
            {/* <div className="skills-bar skills-html"></div> */}
          </div>

          {/* Skill 2: CSS3 */}
          <div className="skills-data">
            <div className="skills-names">
              <i className='bx bxl-css3 skills-icon'></i>
              <span className="skills-name">CSS</span>
            </div>
            <div>
              {/* <span className="skills-percentage">90%</span> */}
            </div>
            {/* <div className="skills-bar skills-css"></div> */}
          </div>

          {/* Skill 3: JavaScript */}
          <div className="skills-data">
            <div className="skills-names">
              <i className='bx bxl-javascript skills-icon'></i>
              <span className="skills-name">JavaScript</span>
            </div>
            <div>
              {/* <span className="skills-percentage">80%</span> */}
            </div>
            {/* <div className="skills-bar skills-js"></div> */}
          </div>

          {/* Skill 4: React */}
          <div className="skills-data">
            <div className="skills-names">
              <i className='bx bxl-react skills-icon'></i>
              <span className="skills-name">React</span>
            </div>
            <div>
              {/* <span className="skills-percentage">85%</span> */}
            </div>
            {/* <div className="skills-bar skills-react"></div> */}
          </div>

          {/* Skill 5: Node.js */}
          <div className="skills-data">
            <div className="skills-names">
              <i className='bx bxl-nodejs skills-icon'></i>
              <span className="skills-name">Node.js</span>
            </div>
            <div>
              {/* <span className="skills-percentage">75%</span> */}
            </div>
            {/* <div className="skills-bar skills-node"></div> */}
          </div>

          {/* Skill 6: Express */}
          <div className="skills-data">
            <div className="skills-names">
              <i className='bx bx-server skills-icon'></i>
              <span className="skills-name">Express</span>
            </div>
            <div>
              {/* <span className="skills-percentage">70%</span> */}
            </div>
            {/* <div className="skills-bar skills-express"></div> */}
          </div>

          {/* Skill 7: MongoDB */}
          <div className="skills-data">
            <div className="skills-names">
              <i className='bx bxl-mongodb skills-icon'></i>
              <span className="skills-name">MongoDB</span>
            </div>
            <div>
              {/* <span className="skills-percentage">75%</span> */}
            </div>
            {/* <div className="skills-bar skills-mongo"></div> */}
          </div>
        </div>

        <div>
          <img src="/full1.jpeg" alt="Profile" className="skills-img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
