import { useState } from "react";

import { defaultProjectKey, projects, skills } from "../../assets/data/data";
import MonitorImage from "../../assets/images/monitor.png";
import { IProject } from "../../common/interfaces";
import NavigateIcon from "../../assets/images/navigate.png";
import CodeIcon from "../../assets/images/code.png";

import "./projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<IProject>(
    projects[defaultProjectKey]
  );

  const changeSelectedProject = (projectKey: string) => {
    setSelectedProject(projects[projectKey]);
  };

  return (
    <div className="section projects">
      <div className="title">Projects</div>
      <div className="content">
        <div className="wrapper">
          <div className="projects-details">
            <ul className="projects-list">
              {Object.keys(projects).map((projectKey) => {
                const project: IProject = projects[projectKey];
                return (
                  <li
                    className={`project-card ${
                      selectedProject.id === project.id ? "selected" : ""
                    }`}
                    key={project.id}
                    onClick={() => changeSelectedProject(projectKey)}
                  >
                    <img src={project.logo} className="logo" />
                    <span className="title">{project.title}</span>
                  </li>
                );
              })}
            </ul>

            <div className="project-description">
              {selectedProject.description}
            </div>
            <div className="tech-stack">
              {selectedProject.techStack.map((tech) => (
                <img
                  src={skills[tech]?.icon}
                  className="tech-icon"
                  key={tech}
                />
              ))}
            </div>
            <div className="project-links">
              <a
                href={selectedProject.projectLink}
                target="_blank"
                className="project-link"
              >
                Open website <img src={NavigateIcon} className="link-icon" />
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                className="project-link"
              >
                Github repo <img src={CodeIcon} className="link-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="project-monitor-box">
          <div className="project-monitor">
            <img
              src={MonitorImage}
              alt="Monitor"
              className="project-monitor-image"
            />
            <img src={selectedProject.image} className="project-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
