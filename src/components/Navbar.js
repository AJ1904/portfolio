import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import React from 'react';
import Tab from 'react-bootstrap/Tab'; // Import Tab component

function CustomNavbar({ onSelectTab }) {
  
  return (
    <Navbar variant="tabs" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="40"
              className="d-inline-block align-top"
              alt="jain.a() logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Tab.Container id="navbar-tabs" defaultActiveKey="#home">
          <Nav className="mr-auto" onSelect={onSelectTab}>
          {/* <Nav className="justify-content-center"> */}
            <Nav.Link href="#home">Home</Nav.Link> 
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certifications">Certifications</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#recognition">Recognition</Nav.Link>
            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#"></Nav.Link>
            
          </Nav>
          </Tab.Container>
        </Navbar.Collapse> 
        </Container>
      </Navbar>

    
  );
}

export default CustomNavbar;