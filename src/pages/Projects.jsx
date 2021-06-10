import {useState, useEffect} from "react";
import {BsFillEyeFill} from "react-icons/bs";
import {SiGithub} from "react-icons/si";

import {projectData} from "../data";

const Projects = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);
  
  useEffect(() => {
    document.title = "Projects";
  }, []);
  
  return (
    <div 
      id="projects-page-container"
      style={{
        top: isMounted && "0",
        opacity: isMounted && "1"
      }}
    >
      <div id="page-title">Projects</div>
      <div id="project-list-container">
        {projectData.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </div>
  );
}

const ProjectContainer = (props) => {
  const {project} = props;
  const [currentTab, setCurrentTab] = useState(1);
  
  return (
    <div className="project-container">
      <div className="project-preview">
        <img src={project.previewImage} alt="" />
        <div className="project-links-flex">
          <a className="project-link" href={project.liveLink} target="_blank">
            <BsFillEyeFill />
            <span>Live Site</span>
          </a>
          <a className="project-link" href={project.sourceLink} target="_blank">
            <SiGithub />
            <span>Source Code</span>
          </a>
        </div>
      </div>
      <div className="project-information">
        <a href={project.liveLink} target="_blank" className="project-title">{project.title}</a>
        <div className="tab-container">
          <nav className="tab-navigation">
            <div 
              className={`tab-nav-link ${currentTab === 1 && "tab-nav-link-active"}`}
              onClick={() => setCurrentTab(1)}
            >
              <span>About</span>
            </div>
            <div 
              className={`tab-nav-link ${currentTab === 2 && "tab-nav-link-active"}`}
              onClick={() => setCurrentTab(2)}
            >
              <span>Tech Used</span>
            </div>
            <div 
              className={`tab-nav-link ${currentTab === 3 && "tab-nav-link-active"}`}
              onClick={() => setCurrentTab(3)}
            >
              <span>Features</span>
            </div>
          </nav>
          <div className="tabbed-content">
            {(() => {
              if(currentTab === 1)
                return (
                  <p>{project.description}</p>
                );

              if(currentTab === 2) 
                return (
                  <ul>
                    {project.technologies.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </ul>
                );
              
              if(currentTab === 3) 
                return (
                  <ul>
                    {project.features.map((ft) => (
                      <li>{ft}</li>
                    ))}
                  </ul>
                );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 