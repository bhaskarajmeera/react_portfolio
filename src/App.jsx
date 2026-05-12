import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar';
import {Hero} from './components/Hero';
import{Banner} from './components/Banner';
import { Skill } from './components/Skill';
import { Project } from './components/Project';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App () {

  return (
<>
<input type="checkbox" id="darkMode"/>
<div className="wrapper ">
 <label htmlFor="darkMode">
         <i className="fa-solid fa-circle-half-stroke"></i>
</label>
{/*  <!-- nav bar --> */}
<Navbar/>   
{/* <!-- hero section --> */}
<Hero/>
{/* <!-- banner --> */}
<Banner/>
{/* <!-- skills --> */}
<Skill />
{/* <!-- projects --> */}
<Project />
{/* <!-- about me --> */}
<About />
{/* <!-- contact us --> */}
<Contact />
{/*  <!-- footer    ---> */}
<Footer />
</div>

</>
  );}

export default App
