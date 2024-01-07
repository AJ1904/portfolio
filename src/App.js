
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
import CustomNavbar from './components/Navbar'; // Import Navbar
import { useState } from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  // const [activeTab, setActiveTab] = useState('#home'); // State to manage active tab

  // const handleTabSelect = (selectedTab) => {
  //   setActiveTab(selectedTab);
  // };
  // const Tab = createBottomTabNavigator();

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

  
  return (
    <div className="App">
      
    {/* <CustomNavbar /> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );

  }

export default App;
