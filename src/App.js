
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

function App() {
  const [activeTab, setActiveTab] = useState('#home'); // State to manage active tab

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <div className="App">
       <CustomNavbar onSelectTab={handleTabSelect} activeTab={activeTab} />
       {activeTab === '#home' && <Home />}
       {activeTab === '#education' && <Education />}
       {activeTab === '#experience' && <Experience />}
       {activeTab === '#skills' && <Skills />}
       {activeTab === '#certifications' && <Certifications />}
       {activeTab === '#volunteer' && <Volunteer />}
       {activeTab === '#recognition' && <Recognition />}
       {activeTab === '#projects' && <Projects />}
       {activeTab === '#contact' && <Contact />}
  
    </div>
    
  );
}

export default App;
