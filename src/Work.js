import React from 'react';

function Work() {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work-container bd-grid">
        <div className="work-img">
          {/* hover text*/}
          
          <img src="./bank.jpg" alt="image" style={{marginTop:"19px"}}  />
          <strong>Bank website</strong>
          <div className="work-hover">
            <h3>Project 1</h3>
            <p>Project 1 description</p>
            <a href="#" className="button">View Project</a>
            </div>
        </div>

        <div className="work-img">
          <img src="./shoping.jpg" alt="image" style={{marginTop:"19px"}} /> 
          <strong>Shoping website </strong>
        </div>

        <div className="work-img">
          <img src="./cal.jpg" alt="image" />
          <strong>calculator</strong>
        </div>

        <div className="work-img">
          <img src="JavaScriptQuiz.jpg" alt="image" />
          <strong>JavaScriptQuiz</strong>
        </div>

        <div className="work-img">
          <img src="turist.jpg" alt="image" />
          <strong>himachal pradesh tourist tour </strong>
        </div>

        <div className="work-img">
          <img src="https://i.postimg.cc/Qd3h9LR7/work6.jpg" alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Work;
