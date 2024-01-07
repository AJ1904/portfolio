import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import manitlogo from '../assets/manit_logo.png';
import tamulogo from '../assets/tamu_logo.png';
const Education = () => {
    return (

        <>
            <div className="education">
        <div className="education-logo">
          <a href="https://www.tamu.edu/" target="_blank"><img src={tamulogo} alt="TAMU Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h3 className="leftalign"> Texas A&M University</h3>
          <h4 className="leftalign">Master of Science in Computer Science</h4>
          <h5 className="leftalign">Jan 2023 - Dec 2024</h5>
          <ul className="custom-list">
            <li><h6 className="educationh6">👩🏻‍🎓 Department of Computer Science Scholarship 2023-2024</h6></li>
            <li><h6 className="educationh6">👩🏻‍🎓 Grace Hopper Celebration 2023 Scholarship</h6></li>
            <li><h6 className="educationh6">👩🏻‍🎓 Artificial Intelligence, Deep Learning, Machine Learning</h6></li>
            <li><h6 className="educationh6">👩🏻‍🎓 Analysis of Algorithms, Software Engineering, Software Reverse Engineering</h6></li>
            <li><h6 className="educationh6">👩🏻‍🎓 Distributed Systems and Cloud Computing, Robotics and Spatial Intelligence, AI Robotics</h6></li>
            <li><h6 className="educationh6">👩🏻‍🎓 GPA 3.67/4.0 </h6></li>
          </ul>
        </div>

      </div>

      <div className="education">
        <div className="education-logo">
          <a href="https://www.manit.ac.in/" target="_blank"><img src={manitlogo} alt="MANIT Logo"></img></a>
          
        </div>
        <div className="education-text">
        <h3 className="leftalign"> Maulana Azad National Institute Of Technology</h3>
          <h4 className="leftalign">Bachelor of Technology in Computer Science & Engineering</h4>
          <h5 className="leftalign">Aug 2015 - May 2019</h5>
          <ul className="custom-list">
          <li><h6 class="educationh6">👩🏻‍🎓 Compiler Design, Operating System, Microprocessor, Distributed Database, Cryptography, Object Oriented Design & Modeling</h6></li>
<li><h6 class="educationh6">👩🏻‍🎓 Computer Networks, Data Ware Housing and Mining, Artificial Intelligence, Advanced Data Structure, Digital Image Processing, Unix Internal Shell Programmings</h6></li>
<li><h6 class="educationh6">👩🏻‍🎓 TCP / IP & Web Technology, Big Data Analytics, Web Search and Mining, Ethical Hacking, Network Security</h6></li>
<li><h6 class="educationh6">👩🏻‍🎓 Computer Programming, Discrete Structure, Data Structure, Digital Electronics, Digital Communication, Computer Graphics, Linear Algebra & Numerical Methods</h6></li>
<li><h6 class="educationh6">👩🏻‍🎓 Probability And Queuing Theory, Computer Architecture, Theory of Computation, Database Management System, Analysis and Design of Algorithm, Software Engineering</h6></li>
<li><h6 class="educationh6">👩🏻‍🎓 Cyber Crime and Information Warfare, Pattern Recognition, Natural Language Processing, Wireless Networks, Bio Metrics</h6></li>
<li><h6 class="educationh6">👩🏻‍🎓 Mathematics, Engineering Chemistry, Environment Engineering, Basic Electronics And Electrical Engineering, Basic Mechanical Engineering, Solid Mechanics, Basic Civil Engineering, Physics, Engineering Graphics, Communication Skills</h6></li>
<li><h6 class="educationh6">👩🏻‍🎓 Labs: Electrical and Electronics, Chemistry, Computer Programming, Physics, Data Structure, Digital Electronics, Computer Graphics, PYTHON, VHDL, DBMS, Software Engineering, JAVA, PHP, Computer Network, HADOOP, CUDA, Data Warehousing & Mining, TCP/IP & Web Technology</h6></li>

            <li><h6 class="educationh6">👩🏻‍🎓 GPA 8.92/10.0 </h6></li>      
 
          </ul>
        </div>

      </div>

            
                    
        </>
    );
};

export default Education;

