
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
import CustomNavbar from './components/CustomNavbar';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

function App() {
  
  const [selectedTab, setSelectedTab] = useState('home');
  
  const TABS = {
    // 'home': <Home />,
    'home': <Home setSelectedTab={setSelectedTab} />,
    'projects': <Projects />,
    'contact': <Contact />,
    'education': <Education />,
    'experience': <Experience />,
    'skills': <Skills />,
    'certifications': <Certifications />,
    'volunteer': <Volunteer />,
    'recognition': <Recognition />
  }



   // Store references to each tab content
   const tabRefs = {
    'home': useRef(null),
    'projects': useRef(null),
    'contact': useRef(null),
    'education': useRef(null),
    'experience': useRef(null),
    'skills': useRef(null),
    'certifications': useRef(null),
    'volunteer': useRef(null),
    'recognition': useRef(null)
  };

  useEffect(() => {
    if (tabRefs[selectedTab].current) {
      tabRefs[selectedTab].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedTab]);

  // return(
  //   <div>
  //     <CustomNavbar 
  //       setSelectedTab={setSelectedTab}
  //     />
  //     {TABS[selectedTab]}
  //   </div>
  // )
  return (
    <div>
      <CustomNavbar setSelectedTab={setSelectedTab} />
      <div ref={tabRefs[selectedTab]}>
        {TABS[selectedTab]}
      </div>
    </div>
  )

  }

export default App;
