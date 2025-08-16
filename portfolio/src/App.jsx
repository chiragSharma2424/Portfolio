import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectSection />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;