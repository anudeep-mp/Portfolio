interface ISkillsDict {
  [key: string]: ISkill;
}

interface ISkill {
  techName: string;
  techIcon: string;
  projectsCount: number;
  isActive: boolean;
  experience: string;
}

export default function Skills() {
  const getExperience = (startDate: string) : string => {
    const presentDate = new Date();
    const presentYear: number = presentDate.getFullYear();
    const exprienceYear: number = Number(startDate.slice(3));
    let monthDiff = 0;
    if (presentYear > exprienceYear) {
      monthDiff =
        (presentYear - exprienceYear - 1) * 12 +
        12 -
        Number(startDate.slice(0, 2)) +
        (presentDate.getMonth() + 1);
    } else {
      monthDiff =
        (presentYear - exprienceYear - 1) * 12 +
        Number(startDate.slice(0, 2)) -
        (presentDate.getMonth() + 1);
    }
    return monthDiff > 0 ? (monthDiff / 12).toFixed(1) : '0';
  };

  const skills : ISkillsDict = {
    reactjs: {
      techName: "React JS",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/128710950-34252cb3-522d-4569-875d-dc68dfb74252.png",
      projectsCount: 4,
      isActive: true,
      experience: getExperience("08/2021"),
    },
    javascript: {
      techName: "JavaScript",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/128709937-80b78fc4-841e-4bbc-8f4a-3f8592046c54.png",
      projectsCount: 10,
      isActive: true,
      experience: getExperience("06/2021"),
    },
    typescript: {
      techName: "TypeScript",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/211630530-df89c2da-8b57-40dd-8143-b400f9be4d83.png",
      projectsCount: 3,
      isActive: true,
      experience: getExperience("06/2022"),
    },
    html: {
      techName: "HTML",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/128709932-8d785243-3226-40fd-b492-f97401d9f458.png",
      projectsCount: 10,
      isActive: true,
      experience: getExperience("06/2021"),
    },

    css: {
      techName: "CSS",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/128709924-3de97fb8-306a-4e35-ac55-29b5830382c7.png",
      projectsCount: 10,
      isActive: true,
      experience: getExperience("06/2021"),
    },

    redux: {
      techName: "Redux",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/134501088-0839d6d7-892c-43b7-9bad-69a7d5002408.png",
      projectsCount: 3,
      isActive: true,
      experience: getExperience("08/2021"),
    },

    restapi: {
      techName: "REST API",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/134500377-2edfb07d-2569-4d3b-91b7-e979413edae1.png",
      projectsCount: 6,
      isActive: true,
      experience: getExperience("06/2021"),
    },
    jest: {
      techName: "Jest",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/211632954-e62d359d-6353-4164-b7e1-f4bf294a561c.png",
      projectsCount: 1,
      isActive: true,
      experience: getExperience("06/2022"),
    },
    fluentui: {
      techName: "Fluent UI",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/216758777-845caf80-590e-4330-b383-aa57cd83b794.png",
      projectsCount: 1,
      isActive: true,
      experience: getExperience("06/2022"),
    },
    reactbootstrap: {
      techName: "React BootStrap",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/134501503-1667ee44-f14f-40d7-b1a0-82fada36a9d0.png",
      projectsCount: 3,
      isActive: true,
      experience: getExperience("08/2021"),
    },

    socket: {
      techName: "Socket IO",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/134501508-2955786c-fea7-467c-912a-2d7ca3581b8c.png",
      projectsCount: 1,
      isActive: false,
      experience: getExperience("08/2021"),
    },

    python: {
      techName: "Python",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/128710947-713130ec-9d6f-4303-9a6e-fb3b96a62f5b.png",
      projectsCount: 4,
      isActive: false,
      experience: getExperience("05/2021"),
    },
    nodejs: {
      techName: "Node JS",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/128710962-5372835b-407a-402a-93f7-9329ed63fc3a.png",
      projectsCount: 3,
      isActive: false,
      experience: getExperience("08/2021"),
    },

    expressjs: {
      techName: "Express JS",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/129219911-34575cf1-2db8-4132-97ba-bbf3d6f65390.png",
      projectsCount: 10,
      isActive: false,
      experience: getExperience("08/2021"),
    },

    mongodb: {
      techName: "Mongo DB",
      techIcon:
        "https://user-images.githubusercontent.com/85919501/134500703-721546e4-62cb-45cf-bbf3-58dce7d94712.png",
      projectsCount: 3,
      isActive: true,
      experience: getExperience("08/2021"),
    },
  };

  return (
    <div className="section">
      <div className="title">Skills</div> 
    </div>
  );
}
