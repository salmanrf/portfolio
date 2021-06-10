import React, {useState, useEffect} from "react";
import {AiFillGithub} from "react-icons/ai";
import {FaFacebookSquare} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { icons } from "react-icons/lib";

import jsicon from "../assets/img/js.png";
import htmlicon from "../assets/img/html.png";
import cssicon from "../assets/img/css3.png";
import reacticon from "../assets/img/react.png";
import mongodbicon from "../assets/img/mongodb.png";
import expressicon from "../assets/img/express.png";
import mongooseicon from "../assets/img/mongoose.jpg";
import nodejsicon from "../assets/img/nodejs.png";

const Home = () => {  
  // Section 1 === main, section 2 === about, section 3 === about
  const [actualSection, setActualSection] = useState(1);
  const [tempSection, setTempSection] = useState(1);

  useEffect(() => {
    document.title = "Home";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setActualSection(tempSection);
    }, 250);
  }, [tempSection]);
  
  return (
    <div id="homepage-container">
      {(() => {
        if(actualSection === 1) 
          return (
            <Main section={{current: 1, temp: tempSection, switchTo: setTempSection}} />
          )
        
        if(actualSection === 2)
            return (
              <About section={{current: 2, temp: tempSection, switchTo: setTempSection}} />
            )

        if(actualSection === 3)
          return (
            <Skills section={{current: 3, temp: tempSection, switchTo: setTempSection}} />
          )
      })()}
      <div id="home-navigation" style={{bottom: actualSection !== 1 ? "25px" : "-10%"}}>
        <div 
          className={`home-nav-link ${tempSection === 1 && "home-nav-link-active"}`}
          onClick={() => setTempSection(1)}
        >
          <div className="home-nav-link-bullet"></div>
          <span>Main</span>
        </div>
        <div 
          className={`home-nav-link ${tempSection === 2 && "home-nav-link-active"}`}
          onClick={() => setTempSection(2)}
        >
          <div className="home-nav-link-bullet"></div>
          <span>About</span>
        </div>
        <div 
          className={`home-nav-link ${tempSection === 3 && "home-nav-link-active"}`}
          onClick={() => setTempSection(3)}
        >
          <div className="home-nav-link-bullet"></div>
          <span>Skills</span>
        </div>
      </div>   
    </div>
  );
}

const Main = (props) => {
  const {section} = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if(section.current !== section.temp) {
      setIsMounted(false);
    } 
  }, [section.temp]);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
  }, []);

  return (
    <div 
      id="home-main" 
      style={{
        transform: isMounted ? "translateY(0%)" : "translateY(25%)", 
        opacity: isMounted ? "1" : "0"
        }}
      >
      <Greetings />
      <Contacts />
      <HomeLinks switchSection={section.switchTo}/>
    </div>
  );
}

const About = (props) => {
  const {section} = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if(section.current !== section.temp) {
      setIsMounted(false);
    } 
  }, [section.temp]);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
  }, []);
  
  return (
    <div className="home-section-container" style={{transform: isMounted ? "translateY(0%)" : "translateY(25%)", opacity: isMounted ? "1" : "0"}}>
      <div className="home-section-header">
        <span>salmanrf@About:~</span>
      </div>
      <div className="home-section-content">
        <h2>About Me</h2>
        <div className="content-section">
          <h3>Background</h3>
          <p>
            Hi! My name is Salman Rizqi Fatih, I am an aspiring Fullstack Web Developer
            from Depok, West Java, Indonesia. 
          </p>
        </div>
        <div className="content-section">
          <h3>Education</h3>
          <div className="content-section-item">
            <h4>Computer Engineering And Networking - </h4>
            <h4>SMKN 1 Cibinong (2014 - 2017)</h4>               
          </div>
        </div>
        {/* <div className="content-section">
          <h3>Professional Experience</h3>
          <div className="content-section-item">
            <h4>-</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const Skills = (props) => {
  const {section} = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if(section.current !== section.temp) {
      setIsMounted(false);
    } 
  }, [section.temp]);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);
  }, []);
  
  return (
      <div 
        className="home-section-container" 
        style={{
          transform: isMounted ? "translateY(0%)" : "translateY(25%)",
          opacity: isMounted ? "1" : "0"
        }}
      >
        <div className="home-section-header">
          <span>salmanrf@Skills:~</span>
        </div>
        <div className="home-section-content">
          <h2>Skills</h2>
          <p>Fullstack Web Development.</p>
          <div id="techstack">
            <h2>Technologies i use: </h2>
            <div id="techstack-container">
              <div className="stack">
                <h3>Frontend</h3>
                <ul>
                  <li className="stack-item">
                    <img src={htmlicon} alt="tech-icon" />
                    <span>HTML</span>
                  </li>
                  <li className="stack-item">
                    <img src={cssicon} alt="tech-icon" />
                    <span>CSS</span>
                  </li>
                  <li className="stack-item">
                    <img src={jsicon} alt="tech-icon" />
                    <span>JavaScript</span>
                  </li>
                  <li className="stack-item">
                    <img src={reacticon} alt="tech-icon" />
                    <span>React</span>
                  </li>
                </ul>
              </div>
              <div className="stack">
                <h3>Backend</h3>
                <ul>
                  <li className="stack-item">
                    <img src={mongodbicon} alt="tech-icon" />
                    <span>MongoDB</span>
                  </li>
                  <li className="stack-item">
                    <img src={expressicon} alt="tech-icon" />
                    <span>Express</span>
                  </li>
                  <li className="stack-item">
                    <img src={mongooseicon} alt="tech-icon" />
                    <span>Mongoose</span>
                  </li>
                  <li className="stack-item">
                    <img src={nodejsicon} alt="tech-icon" />
                    <span>NodeJS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

// ========= Home Main Sub-Components ========= 
const Greetings = () => {
  return (
    <div id="greetings">
      <div id="welcome">
        <h1>Welcome!</h1>
      </div>
      <div className="greeting-line">
        <h2>I'm</h2>
        <h1>Salman Rizqi Fatih</h1>
      </div>
      <div className="greeting-line">
        <h2>a</h2>
        <h1>Fullstack Developer</h1>
      </div>
    </div>
  );
}

const Contacts = () => {
  return (
    <div id="contacts">
      <a href="https://github.com/salmanrf" target="_blank" rel="noreferrer" className="contact-item">
        <AiFillGithub />
        <span>salmanrf</span>
      </a>
      <a href="mailto:salmanrf2@gmail.com" className="contact-item">
        <HiOutlineMail />
        <span>salmanrf2@gmail.com</span>
      </a>
      <a href="https://www.facebook.com/salmanrfsrf/" target="_blank" className="contact-item">
        <FaFacebookSquare />
        <span>salmanrfsrf</span>
      </a>
    </div>
  );
}

const HomeLinks = (props) => {
  return (
    <div id="home-links">
      <div className="home-link-item" onClick={() => props.switchSection(2)}>
        <span className="home-link-cursor"></span>
        <span className="home-link-link">About</span>
      </div>
      <div className="home-link-item" onClick={() => props.switchSection(3)}>
        <span className="home-link-cursor"></span>
        <span className="home-link-link">Skills</span>
      </div>  
    </div>
  );
}
// ========= Home Main Sub-Components ========= 

export default Home;