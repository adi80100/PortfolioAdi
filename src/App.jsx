import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/layout/Hero.jsx';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';
import Skills from './components/sections/Skills.jsx';
import Contact from './components/sections/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;