import React from 'react';
import '../App.css';
import homegif from '../assets/homegif.gif';
import linkedinlogo from '../assets/linkedin.png';
import githublogo from '../assets/github.png';
import gmaillogo from '../assets/gmail.png';
import tamulogo from '../assets/tamu_logo.png';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Certifications from './Certifications';
import Volunteer from './Volunteer';
import Recognition from './Recognition';
import manitlogo from '../assets/manit_logo.png';
import optumlogo from '../assets/optum_logo.png';

import endeavrlogo from '../assets/endeavr_logo.jpeg';

// import Projects from './Projects';
import Contact from './Contact';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const revealSection = () => {
      sections.forEach((section) => {
        if (window.scrollY + window.innerHeight > section.offsetTop) {
          section.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', revealSection);
    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', revealSection);
  }, []);
  return (
    <>
    <section>
    <div className="homecontainer">
      <br />
      <h1>Hey! :D</h1>
      <h2>I am <span className="homename">Ayushri Jain</span>.</h2>

      <div className="homecontent">
        <div className="homeimage-container">
          <img className="homegif-image" src={homegif} alt="Home GIF"></img>
        </div>
      </div>

      <h4 className="homeh5">Always learning and exploring the intersections of technology and innovation.</h4>
      <h4 className="homeh5">Passionate about simplifying, automating, and optimizing pipelines, machine learning models, and software.</h4>
      <h4 className="homeh5">Creating unique and simplistic applications in creative ways.</h4>
    </div>

    
    </section>
    <section ><Contact /></section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
<section className="section">
  {/* <h1 className="homename">Education</h1> */}
  <div className="projects">
    <div className="project">
<div className="education">

        <div className="education-logo">
          <a href="https://www.tamu.edu/" target="_blank" rel="noreferrer"><img src={tamulogo} alt="TAMU Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h4 className="leftalign"> Texas A&M University</h4>
          <h5 className="leftalign">Master of Science in Computer Science</h5>
          <h6 className="leftalign">Jan 2023 - Dec 2024</h6>
          
        </div>

      </div>
      </div>
      <div className="project">
      <div className="education">
        <div className="education-logo">
          <a href="https://www.manit.ac.in/" target="_blank" rel="noreferrer"><img src={manitlogo} alt="MANIT Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h4 className="leftalign"> Maulana Azad National Institute Of Technology</h4>
          <h5 className="leftalign">Bachelor of Technology in Computer Science & Engineering</h5>
          <h6 className="leftalign">Aug 2015 - May 2019</h6>
          
        </div>

      </div>
      </div>
      </div>     
        


</section>


<section className="section">
  {/* <h1 className="homename">Experience</h1> */}
<div className="projects">
    <div className="project">
<div className="education">
        <div className="education-logo">
          <a href="https://www.optum.com/" target="_blank" rel="noreferrer"><img src={optumlogo} alt="optum Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h4 className="leftalign"> Optum Global Solutions, United Health Group</h4>
          <h5 className="leftalign">Senior Data Engineer</h5>
          <h6 className="leftalign">Mar 2022 - Jan 2023</h6>
          
        </div>
        </div>
      </div>
      <div className="project">
      <div className="education">
        <div className="education-logo">
          <a href="https://www.optum.com/" target="_blank" rel="noreferrer"><img src={optumlogo} alt="optum Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h4 className="leftalign">Optum Global Solutions, United Health Group</h4>
            <h5 className="leftalign">Software Engineer</h5>
          <h6 className="leftalign">July 2019 - Feb 2022</h6>
          
        </div>

      </div>
      </div>
      </div>

      <div className="projects">
    <div className="project">
      <div className="education">
        <div className="education-logo">
          <a href="https://www.linkedin.com/company/endeavr-institute/" target="_blank" rel="noreferrer"><img src={endeavrlogo} alt="ENDEAVR Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h4 className="leftalign">ENDEAVR Institute</h4>
          <h5 className="leftalign">Machine Learning Engineer</h5>
          <h6 className="leftalign">Sep 2023 - Dec 2023</h6>
          
        </div>
      </div>

      </div>

      <div className="project">
      <div className="education">
        <div className="education-logo">

          <a href="https://www.tamu.edu/" target="_blank" rel="noreferrer"><img src={tamulogo} alt="TAMU Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h4 className="leftalign">Department of Petroleum Engineering</h4>
          <h5 className="leftalign">Research Technician</h5>
          <h6 className="leftalign">Jun 2023 - Dec 2023</h6>
          
        </div>
        </div>
        </div>
        </div>



</section>

<section className="section">
  {/* <h1 className="homename">Recognition</h1> */}
  <Recognition /></section>
<br />
    <br />

    
    </>
  );
};

export default Home;

{/* <div className="social-icons">
    <a href="https://www.linkedin.com/in/ayushrijain" target="_blank" rel="noreferrer" className="social-icon"><i><img src={linkedinlogo} alt="linkedin"></img></i></a>
        <a href="https://github.com/AJ1904" target="_blank" rel="noreferrer" className="social-icon"><img src={githublogo}  alt="github"></img></a>
        <a href="mailto:ayushrijain19@gmail.com" target="_blank" rel="noreferrer" className="social-icon"><img src={gmaillogo} alt="gmail"></img></a>
        <a href="https://grad.tamu.edu/aggie-life/aggie-voice/ayushri-jain" target="_blank" rel="noreferrer" className="social-icon"><img src={tamulogo} alt="tamu"></img></a>
        
    </div> */}