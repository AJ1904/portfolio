import React from 'react';
import '../App.css';
import linkedinlogo from '../assets/linkedin.png';
import githublogo from '../assets/github.png';
import gmaillogo from '../assets/gmail.png';
import tamulogo from '../assets/tamu_logo.png';
const Contact = () => {
  return (
    
      <>
      
<center>Please feel free to reach out to me via email or LinkedIn. </center>
<center> I am generally open to new opportunities and collaborations.</center>
<div class="social-icons">
        <a href="https://www.linkedin.com/in/ayushrijain" target="_blank" rel="noreferrer" class="social-icon"><i><img src={linkedinlogo}></img></i></a>
        <a href="https://github.com/AJ1904" target="_blank" rel="noreferrer" class="social-icon"><img src={githublogo}></img></a>
        <a href="mailto:ayushrijain19@gmail.com" target="_blank" rel="noreferrer" class="social-icon"><img src={gmaillogo}></img></a>
        <a href="https://grad.tamu.edu/aggie-life/aggie-voice/ayushri-jain" target="_blank" rel="noreferrer" class="social-icon"><img src={tamulogo}></img></a>
        
    </div>

      </>
  );
};

export default Contact;

