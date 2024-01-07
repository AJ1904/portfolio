import React from 'react';
import '../App.css';
import homegif from '../assets/homegif.gif';
import linkedinlogo from '../assets/linkedin.png';
import githublogo from '../assets/github.png';
import gmaillogo from '../assets/gmail.png';
import tamulogo from '../assets/tamu_logo.png';
const Home = () => {
  return (
    <>
    <div className="homecontainer">
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

    <div class="social-icons">
    <a href="https://www.linkedin.com/in/ayushrijain" target="_blank" rel="noreferrer" class="social-icon"><i><img src={linkedinlogo} alt="linkedin"></img></i></a>
        <a href="https://github.com/AJ1904" target="_blank" rel="noreferrer" class="social-icon"><img src={githublogo}  alt="github"></img></a>
        <a href="mailto:ayushrijain19@gmail.com" target="_blank" rel="noreferrer" class="social-icon"><img src={gmaillogo} alt="gmail"></img></a>
        <a href="https://grad.tamu.edu/aggie-life/aggie-voice/ayushri-jain" target="_blank" rel="noreferrer" class="social-icon"><img src={tamulogo} alt="tamu"></img></a>
        
    </div>
    </>
  );
};

export default Home;
