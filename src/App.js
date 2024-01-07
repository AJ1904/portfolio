
import './App.css';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Volunteer from './components/Volunteer';
import Recognition from './components/Recognition';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomNavbar from './components/CustomNavbar'; // Import Navbar
import { useState } from 'react';
import React from 'react';

function App() {
  
  const TABS = {
    'home': <Home />,
    'projects': <Projects />,
    'contact': <Contact />,
    'education': <Education />,
    'experience': <Experience />,
    'skills': <Skills />,
    'certifications': <Certifications />,
    'volunteer': <Volunteer />,
    'recognition': <Recognition />
  }

  const [selectedTab, setSelectedTab] = useState('home');

  return(
    <div>
      <CustomNavbar 
        setSelectedTab={setSelectedTab}
      />
      {/* this is the main content of the page */}
      {TABS[selectedTab]}
    </div>
  )

  }

export default App;
