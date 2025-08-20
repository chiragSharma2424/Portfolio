import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Experience from './components/Experince';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <ProjectSection />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default App;