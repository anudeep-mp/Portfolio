import { CSSProperties, useEffect, useRef, useState } from "react";
import "./skills.css";

interface ISkillsDict {
  programmingSkills: {
    [key: string]: ISkill;
  };
  frameworkSkills: {
    [key: string]: ISkill;
  };
}

type ExperienceType = "relative" | "fixed";

type ISkill = IRelativeSkill | IFixedSkill;
interface IRelativeSkill {
  id: string;
  techName: string;
  icon: string;
  description: string;
  projectsCount: number;
  skillLevelPercentage: number;
  isActive: boolean;
  experienceType: "relative";
  startDate: string;
}

interface IFixedSkill {
  id: string;
  techName: string;
  icon: string;
  description: string;
  projectsCount: number;
  skillLevelPercentage: number;
  isActive: boolean;
  experienceType: "fixed";
  startDate: string;
  endDate: string;
}

export default function Skills() {
  const [dragStarted, setDragStarted] = useState<boolean>(false);
  const currentSkillLevelInDegrees = useRef<string>("-90deg");
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(mediaQuery.matches);
  }, []);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    skill: ISkill
  ) => {
    setDragStarted(true);
    e.dataTransfer.setData("text/plain", JSON.stringify(skill));
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragStarted(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));
    setSelectedSkill(droppedItem);
    setDragStarted(false);
  };

  const getExperience = (
    experienceType: ExperienceType,
    startDate: string,
    endDate: string
  ): string => {
    const closingDate =
      experienceType === "relative"
        ? new Date()
        : new Date(endDate.slice(0, 2) + "/01/" + endDate.slice(3));
    const closingYear: number = closingDate.getFullYear();
    const exprienceYear: number = Number(startDate.slice(3));
    let monthDiff = 0;
    if (closingYear > exprienceYear) {
      monthDiff =
        (closingYear - exprienceYear - 1) * 12 +
        12 -
        Number(startDate.slice(0, 2)) +
        (closingDate.getMonth() + 1);
    } else {
      monthDiff = closingDate.getMonth() + 1 - Number(startDate.slice(0, 2));
    }
    return monthDiff > 0 ? (monthDiff / 12).toFixed(1) : "0";
  };

  const handleSkillClickForTouchDevices = (skill: ISkill) => {
    if (isTouchDevice) {
      setSelectedSkill(skill);
    }
  };

  const getSkillLevelInDegrees = (skillLevelPercentage: number): string => {
    const degree = skillLevelPercentage * 1.9 - 90;
    setTimeout(() => {
      currentSkillLevelInDegrees.current = `${degree}deg`;
    }, 5000);
    return `${degree}deg`;
  };

  const skills: ISkillsDict = {
    programmingSkills: {
      javascript: {
        id: "javascript",
        techName: "JavaScript",
        description:
          "A programming language used to create interactive web pages and dynamic content on websites",
        icon: "https://user-images.githubusercontent.com/85919501/128709937-80b78fc4-841e-4bbc-8f4a-3f8592046c54.png",
        projectsCount: 10,
        skillLevelPercentage: 80,
        isActive: true,
        startDate: "06/2021",
        experienceType: "relative",
      },
      typescript: {
        id: "typescript",
        techName: "TypeScript",
        description:
          "A superset of JavaScript that provides additional features like strong typing and better error checking for large-scale web applications.",
        icon: "https://user-images.githubusercontent.com/85919501/211630530-df89c2da-8b57-40dd-8143-b400f9be4d83.png",
        projectsCount: 3,
        skillLevelPercentage: 60,
        isActive: true,
        startDate: "06/2022",
        experienceType: "relative",
      },
      html: {
        id: "html",
        techName: "HTML",
        description:
          "A markup language used to structure and display content on web pages.",
        icon: "https://user-images.githubusercontent.com/85919501/128709932-8d785243-3226-40fd-b492-f97401d9f458.png",
        projectsCount: 10,
        skillLevelPercentage: 80,
        isActive: true,
        startDate: "06/2021",
        experienceType: "relative",
      },

      css: {
        id: "css",
        techName: "CSS",
        description:
          "A style sheet language used to make web pages look visually appealing by adding styling details like colors, fonts, and layouts.",
        icon: "https://user-images.githubusercontent.com/85919501/128709924-3de97fb8-306a-4e35-ac55-29b5830382c7.png",
        projectsCount: 10,
        skillLevelPercentage: 80,
        isActive: true,
        startDate: "06/2021",
        experienceType: "relative",
      },
      python: {
        id: "python",
        techName: "Python",
        description:
          "A high-level programming language used for web development, data analysis, scientific computing, and more.",
        icon: "https://user-images.githubusercontent.com/85919501/128710947-713130ec-9d6f-4303-9a6e-fb3b96a62f5b.png",
        projectsCount: 4,
        skillLevelPercentage: 20,
        isActive: false,
        experienceType: "fixed",
        startDate: "05/2021",
        endDate: "08/2021",
      },
    },
    frameworkSkills: {
      reactjs: {
        id: "reactjs",
        techName: "React JS",
        description:
          "A popular technology used to build user interfaces for websites and mobile apps.",
        icon: "https://user-images.githubusercontent.com/85919501/128710950-34252cb3-522d-4569-875d-dc68dfb74252.png",
        projectsCount: 4,
        skillLevelPercentage: 70,
        isActive: true,
        startDate: "06/2021",
        experienceType: "relative",
      },

      redux: {
        id: "redux",
        techName: "Redux",
        description:
          "A state management library used in conjunction with React to manage application state and data flow.",
        icon: "https://user-images.githubusercontent.com/85919501/134501088-0839d6d7-892c-43b7-9bad-69a7d5002408.png",
        projectsCount: 3,
        skillLevelPercentage: 60,
        isActive: true,
        startDate: "06/2021",
        experienceType: "relative",
      },

      jest: {
        id: "jest",
        techName: "Jest",
        description:
          "A JavaScript testing framework used to test React applications.",
        icon: "https://user-images.githubusercontent.com/85919501/211632954-e62d359d-6353-4164-b7e1-f4bf294a561c.png",
        projectsCount: 1,
        skillLevelPercentage: 50,
        isActive: true,
        startDate: "06/2022",
        experienceType: "relative",
      },

      fluentui: {
        id: "fluentui",
        techName: "Fluent UI",
        description:
          "A design system and set of React components developed by Microsoft for building web applications with a consistent look and feel.",
        icon: "https://user-images.githubusercontent.com/85919501/216758777-845caf80-590e-4330-b383-aa57cd83b794.png",
        projectsCount: 1,
        skillLevelPercentage: 80,
        isActive: true,
        startDate: "06/2022",
        experienceType: "relative",
      },

      reactbootstrap: {
        id: "reactbootstrap",
        techName: "React BootStrap",
        description:
          "A popular library used to build responsive, mobile-first projects on the web using React JS and Bootstrap.",
        icon: "https://user-images.githubusercontent.com/85919501/134501503-1667ee44-f14f-40d7-b1a0-82fada36a9d0.png",
        projectsCount: 3,
        skillLevelPercentage: 70,
        isActive: true,
        experienceType: "fixed",
        startDate: "08/2021",
        endDate: "12/2021",
      },

      nodejs: {
        id: "nodejs",
        techName: "Node JS",
        description:
          "A server-side runtime environment that allows developers to run JavaScript code outside of a web browser.",
        icon: "https://user-images.githubusercontent.com/85919501/128710962-5372835b-407a-402a-93f7-9329ed63fc3a.png",
        projectsCount: 3,
        skillLevelPercentage: 20,
        isActive: false,
        experienceType: "fixed",
        startDate: "08/2021",
        endDate: "12/2021",
      },

      expressjs: {
        id: "expressjs",
        techName: "Express JS",
        description:
          "A popular web framework for Node JS that provides a robust set of features for web and mobile applications.",
        icon: "https://user-images.githubusercontent.com/85919501/129219911-34575cf1-2db8-4132-97ba-bbf3d6f65390.png",
        projectsCount: 10,
        skillLevelPercentage: 20,
        isActive: false,
        experienceType: "fixed",
        startDate: "08/2021",
        endDate: "12/2021",
      },

      mongodb: {
        id: "mongodb",
        techName: "Mongo DB",
        description:
          "A popular NoSQL database used to store data in JSON-like documents.",
        icon: "https://user-images.githubusercontent.com/85919501/134500703-721546e4-62cb-45cf-bbf3-58dce7d94712.png",
        projectsCount: 3,
        skillLevelPercentage: 40,
        isActive: true,
        experienceType: "relative",
        startDate: "08/2021",
      },

      websockets: {
        id: "websockets",
        techName: "Web Sockets",
        description:
          "A computer communications protocol that provides full-duplex communication channels over a single TCP connection.",
        icon: "https://user-images.githubusercontent.com/85919501/134501508-2955786c-fea7-467c-912a-2d7ca3581b8c.png",
        projectsCount: 1,
        skillLevelPercentage: 30,
        isActive: false,
        experienceType: "fixed",
        startDate: "08/2021",
        endDate: "12/2021",
      },

      restapi: {
        id: "restapi",
        techName: "REST API",
        description:
          "An architectural style for designing networked applications that uses HTTP requests to GET, PUT, POST and DELETE data.",
        icon: "https://user-images.githubusercontent.com/85919501/134500377-2edfb07d-2569-4d3b-91b7-e979413edae1.png",
        projectsCount: 6,
        skillLevelPercentage: 70,
        isActive: false,
        experienceType: "relative",
        startDate: "06/2021",
      },
    },
  };

  return (
    <div className="section skills">
      <div className="title">Skills</div>
      <div className="content">
        <div className="wrapper">
          <div className="scroll-container">
            <div className="skills-basket">
              {Object.keys(skills.programmingSkills).map((skillKey) => {
                const skill = skills.programmingSkills[skillKey];
                return (
                  <div
                    key={skill.id}
                    className="skill-card"
                    style={
                      isTouchDevice ? { cursor: "pointer" } : { cursor: "grab" }
                    }
                    draggable
                    onDragStart={(e) => handleDragStart(e, skill)}
                    onDragEnd={handleDragEnd}
                    onClick={() => handleSkillClickForTouchDevices(skill)}
                  >
                    <img
                      src={skill.icon}
                      className="skill-image"
                      draggable={false}
                    />
                  </div>
                );
              })}
              {Object.keys(skills.frameworkSkills).map((skillKey) => {
                const skill = skills.frameworkSkills[skillKey];
                return (
                  <div
                    key={skill.id}
                    className="skill-card"
                    draggable
                    onDragStart={(e) => handleDragStart(e, skill)}
                    onDragEnd={(e) => handleDragEnd(e)}
                    onClick={() => handleSkillClickForTouchDevices(skill)}
                  >
                    <img
                      src={skill.icon}
                      className="skill-image"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`skill-selector${dragStarted ? " dragging" : ""}${
            selectedSkill ? " dropped" : ""
          }`}
        >
          <div className="box-rail first-rail">
            <div
              className="drop-receiver"
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e)}
            >
              {selectedSkill && (
                <img src={selectedSkill.icon} className="skill-image" />
              )}
            </div>
            <div className="box-title">
              {selectedSkill ? selectedSkill.techName : "Drop a skill"}
            </div>
          </div>
          <div className="box-rail second-rail">
            <div className="box-description">
              {selectedSkill
                ? selectedSkill.description
                : "Simply drag a skill from the available skillset and drop it into the circle above. If you are using a mobile phone, you can tap on the skill to select it."}
            </div>
          </div>
          <div className="box-rail third-rail">
            <div className="experience-count">
              <div>Experience in years</div>
              <div>
                {selectedSkill &&
                  getExperience(
                    selectedSkill.experienceType,
                    selectedSkill.startDate,
                    selectedSkill.experienceType === "fixed"
                      ? selectedSkill.endDate
                      : ""
                  )}
              </div>
            </div>
            <div className="skill-meter-box">
              <div
                className="skill-meter"
                style={
                  {
                    "--exisiting-skill-percentage":
                      currentSkillLevelInDegrees.current,
                    "--skill-percentage": selectedSkill
                      ? getSkillLevelInDegrees(
                          selectedSkill.skillLevelPercentage
                        )
                      : "-90deg",
                  } as CSSProperties
                }
              >
                <div className="block first" data-name="Novice" />
                <div className="block second" data-name="Beginner" />
                <div className="block third" data-name="Intermediate" />
                <div className="block fourth" data-name="Advanced" />
                <div className="block fifth" data-name="Expert" />
                <div className="meter-pin" />
                <div className="meter-bob" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
