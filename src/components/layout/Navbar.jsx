import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-name">Aditya  Dayanand Dhore</span>
        </div>
        
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a 
              href="https://drive.google.com/file/d/1UHyloJtcaSW_FkD1RXXGIZl_4MNHXXRX/view?usp=drive_link" 
              className="nav-link resume-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;