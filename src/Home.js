import React from 'react';

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home-data">
        <h1 className="home-title">Hi, <br />I'm <span className="home-title-color">Sushil kumar</span><br /> MERN Stack Developer   </h1>
        <a href="#contact" className="button">Contact</a>
      </div>

      <div className="home-social">
        <a href="#" className="home-social-icon"><i className='bx bxl-linkedin'></i></a>
        <a href="#" className="home-social-icon"><i className='bx bxl-instagram'></i></a>
        <a href="#" className="home-social-icon"><i className='bx bxl-github'></i></a>
      </div>

      <div className="home-img">
      <img src="/myimage.jpg" alt="Profile" className="skills-img" />      
      </div>
    </section>
  );
};

export default Home;
