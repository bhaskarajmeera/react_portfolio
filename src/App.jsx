import './App.css'
import { Hero } from './components/Hero';
import { Skill } from './components/Skill';
import { Project } from './components/Project';
import { About } from './components/About';
import { Contact } from './components/Contact';

import {Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

function App () {

  return (
 <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="hero" element={<Hero />}/>
        <Route path="skills" element={<Skill />}/>
        <Route path="projects" element={<Project />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
  </Routes>
  );
}

export default App
