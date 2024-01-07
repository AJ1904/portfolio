import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import React from 'react';
import Tab from 'react-bootstrap/Tab'; // Import Tab component

function CustomNavbar({setSelectedTab}) {
  return(
    <Nav fill variant="tabs">
     
        <Nav.Item onClick={() => setSelectedTab('home')}> <Nav.Link href="/home"><img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="jain.a() logo" /></Nav.Link> </Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('education')}> <Nav.Link eventKey="/education">Education</Nav.Link> </Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('experience')}> <Nav.Link eventKey="/experience">Experience</Nav.Link> </Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('skills')}> <Nav.Link eventKey="/skills">Skills</Nav.Link></Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('certifications')}> <Nav.Link eventKey="/certifications">Certifications</Nav.Link></Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('projects')}> <Nav.Link eventKey="/projects">Projects</Nav.Link></Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('recognition')}> <Nav.Link eventKey="/recognition">Recognition</Nav.Link> </Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('volunteer')}> <Nav.Link eventKey="/volunteer">Volunteer</Nav.Link> </Nav.Item>
        <Nav.Item onClick={() => setSelectedTab('contact')}> <Nav.Link eventKey="/contact">Contact</Nav.Link> </Nav.Item>
        

     
     
      </Nav>
  );
  }

export default CustomNavbar;

