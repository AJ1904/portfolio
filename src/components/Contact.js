import React from 'react';
import '../App.css';
import linkedinlogo from '../assets/linkedin.png';
import githublogo from '../assets/github.png';
import gmaillogo from '../assets/gmail.png';
import tamulogo from '../assets/tamu_logo.png';
import hashnodelogo from '../assets/hashnode_logo.png';
const Contact = () => {
  return (
      <>
      <br />
      <br />
      <br />
<h4><center>Please feel free to reach out to me via email or LinkedIn. </center></h4>
<div className="social-icons">
        <a href="https://www.linkedin.com/in/ayushrijain" target="_blank" rel="noreferrer" className="social-icon"><i><img src={linkedinlogo} alt="linkedin"></img></i></a>
        <a href="https://github.com/AJ1904" target="_blank" rel="noreferrer" className="social-icon"><img src={githublogo}  alt="github"></img></a>
        <a href="mailto:ayushrijain19@gmail.com" target="_blank" rel="noreferrer" className="social-icon"><img src={gmaillogo} alt="gmail"></img></a>
        <a href="https://grad.tamu.edu/aggie-life/aggie-voice/ayushri-jain" target="_blank" rel="noreferrer" className="social-icon"><img src={tamulogo} alt="tamu"></img></a>
        <a href="https://ayushrijain.hashnode.dev/" target="_blank" rel="noreferrer" className="social-icon" tooltip="hasnode"><img src={hashnodelogo} alt="hashnode"></img></a>
        

    </div>

      </>
  );
};

export default Contact;

