import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
  
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }
    };

    showMenu('nav-toggle', 'nav-menu');

    const navLink = document.querySelectorAll('.nav-link');

    function linkAction() {
      navLink.forEach(n => n.classList.remove('active'));
      this.classList.add('active');
      
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav-logo">Sushil kumar</a>
        </div>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#work" className="nav-link">Work</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>

        <div className="nav-toggle" id="nav-toggle">
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
