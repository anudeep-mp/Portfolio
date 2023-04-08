import OneBancLogo from "../../assets/images/onebanc-logo.png";
import SpcLogo from "../../assets/images/spc-logo.png";
import VitLogo from "../../assets/images/vit-logo.png";
import VitBGLogo from "../../assets/images/vit-logo-bg.png";
import JestIcon from "../../assets/images/jest.png";
import WebSocketsIcon from "../../assets/images/web-sockets.png";
import FluentUIIcon from "../../assets/images/fluent-ui.png";
import BootStrapIcon from "../../assets/images/bootstrap.png";
import TypeScriptIcon from "../../assets/images/typescript.png";
import JavaScriptIcon from "../../assets/images/javascript.png";
import NodeIcon from "../../assets/images/node.png";
import ReactIcon from "../../assets/images/react.png";
import ReduxIcon from "../../assets/images/redux.png";
import HTMLIcon from "../../assets/images/html.png";
import CSSIcon from "../../assets/images/css.png";
import ExpressIcon from "../../assets/images/express.png";
import MongoDBIcon from "../../assets/images/mongo-db.png";
import RestIcon from "../../assets/images/rest.png";
import PythonIcon from "../../assets/images/python.png";
import CubekartImage from "../../assets/images/cubekart.png";
import CubekartLogo from "../../assets/images/cubekart-logo.png";
import CubeMusicImage from "../../assets/images/cubemusic.png";
import CubeMusicLogo from "../../assets/images/cube-music-logo.png";
import CubeChatImage from "../../assets/images/cubechat.png";
import CubeChatLogo from "../../assets/images/cube-chat-logo.png";
import CubekartGif from "../../assets/images/cubekart.gif";
import CubeMusicGif from "../../assets/images/cubemusic.gif";
import CubeChatGif from "../../assets/images/cubechat.gif";
import MailIcon from "../../assets/images/mail.png";
import GitHubIcon from "../../assets/images/github.png";
import LinkedInIcon from "../../assets/images/linkedin.png";
import TwitterIcon from "../../assets/images/twitter.png";
import InstagramIcon from "../../assets/images/instagram.png";
import PhoneIcon from "../../assets/images/phone.png";
import WhatsAppIcon from "../../assets/images/whatsapp.png";

import {
  ICareerItem,
  IContactLink,
  IProjectDict,
  ISkillsDict,
  ISocialLink,
} from "../../common/interfaces";

export const carrerData: ICareerItem[] = [
  {
    id: 1,
    orgLogo: VitLogo,
    orgBGLogo: VitBGLogo,
    orgName: "Vellore Institute of Technology",
    orgPosition: "Bachelor of Technology",
    orgTenure: "July 2017 - June 2021",
    orgLink: "https://vit.ac.in",
    location: "Vellore, Tamil Nadu",
  },
  {
    id: 2,
    orgLogo: OneBancLogo,
    orgBGLogo: OneBancLogo,
    orgName: "OneBanc Technologies",
    orgPosition: "Associate Frontend Developer",
    orgTenure: "Oct 2021 - Feb 2022",
    orgLink: "https://onebanc.ai",
    location: "Gurgaon, Haryana",
  },
  {
    id: 3,
    orgLogo: OneBancLogo,
    orgBGLogo: OneBancLogo,
    orgName: "OneBanc Technologies",
    orgPosition: "Frontend Developer",
    orgTenure: "Feb 2022 - June 2022",
    orgLink: "https://onebanc.ai",
    location: "Gurgaon, Haryana",
  },
  {
    id: 4,
    orgLogo: SpcLogo,
    orgBGLogo: SpcLogo,
    orgName: "SkyPoint Cloud",
    orgPosition: "Software Development Engineer - I",
    orgTenure: "June 2022 - Present",
    orgLink: "https://skypointcloud.com",
    location: "Bangalore, Karnataka",
  },
];

export const skills: ISkillsDict = {
  javascript: {
    id: "javascript",
    techName: "JavaScript",
    description:
      "A scripting language used for creating interactive web pages and web applications, often used alongside HTML and CSS.",
    icon: JavaScriptIcon,
    projectsCount: 10,
    skillLevelPercentage: 80,
    isActive: true,
    startDate: "06/2021",
    experienceType: "relative",
  },
  reactjs: {
    id: "reactjs",
    techName: "React JS",
    description:
      "A JavaScript library used for building user interfaces, allowing developers to create reusable UI components and build complex applications.",
    icon: ReactIcon,
    projectsCount: 4,
    skillLevelPercentage: 70,
    isActive: true,
    startDate: "06/2021",
    experienceType: "relative",
  },
  typescript: {
    id: "typescript",
    techName: "TypeScript",
    description:
      "A typed superset of JavaScript that provides better type checking and enables better code organization, allowing for more maintainable codebases.",
    icon: TypeScriptIcon,
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
      "A markup language used to structure content on web pages, defining the layout and appearance of text, images, and other media.",
    icon: HTMLIcon,
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
      "A stylesheet language used to describe the presentation of HTML content, controlling its appearance, layout, and other visual aspects.",
    icon: CSSIcon,
    projectsCount: 10,
    skillLevelPercentage: 80,
    isActive: true,
    startDate: "06/2021",
    experienceType: "relative",
  },
  redux: {
    id: "redux",
    techName: "Redux",
    description:
      "A predictable state container used in JavaScript applications, often used in conjunction with React to manage complex state changes.",
    icon: ReduxIcon,
    projectsCount: 3,
    skillLevelPercentage: 60,
    isActive: true,
    startDate: "06/2021",
    experienceType: "relative",
  },
  fluentui: {
    id: "fluentui",
    techName: "Fluent UI",
    description:
      "A design system developed by Microsoft for building user interfaces, offering a set of reusable components and tools for creating modern web and mobile applications.",
    icon: FluentUIIcon,
    projectsCount: 1,
    skillLevelPercentage: 80,
    isActive: true,
    startDate: "06/2022",
    experienceType: "relative",
  },
  bootstrap: {
    id: "bootstrap",
    techName: "BootStrap",
    description:
      "A popular CSS framework used for building responsive and mobile-first web applications, providing a set of pre-built UI components and styles.",
    icon: BootStrapIcon,
    projectsCount: 3,
    skillLevelPercentage: 70,
    isActive: true,
    experienceType: "fixed",
    startDate: "08/2021",
    endDate: "12/2021",
  },
  jest: {
    id: "jest",
    techName: "Jest",
    description:
      "A JavaScript testing framework developed by Facebook, used for unit and integration testing of React applications and other JavaScript projects.",
    icon: JestIcon,
    projectsCount: 1,
    skillLevelPercentage: 50,
    isActive: true,
    startDate: "06/2022",
    experienceType: "relative",
  },
  nodejs: {
    id: "nodejs",
    techName: "Node JS",
    description:
      "A JavaScript runtime built on the Chrome V8 engine, used for building server-side web applications and other backend services in JavaScript.",
    icon: NodeIcon,
    projectsCount: 3,
    skillLevelPercentage: 20,
    isActive: true,
    experienceType: "fixed",
    startDate: "08/2021",
    endDate: "12/2021",
  },
  expressjs: {
    id: "expressjs",
    techName: "Express JS",
    description:
      "A popular NoSQL database used for storing and managing unstructured data, often used in web and mobile applications to provide flexible data storage.",
    icon: ExpressIcon,
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
      "A protocol used for bi-directional communication between a client and server, allowing real-time data transfer and enabling the creation of interactive web applications.",
    icon: MongoDBIcon,
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
    icon: WebSocketsIcon,
    projectsCount: 1,
    skillLevelPercentage: 30,
    isActive: true,
    experienceType: "fixed",
    startDate: "08/2021",
    endDate: "12/2021",
  },
  restapi: {
    id: "restapi",
    techName: "REST API",
    description:
      "An architectural style for designing networked applications that uses HTTP requests to GET, PUT, POST and DELETE data.",
    icon: RestIcon,
    projectsCount: 6,
    skillLevelPercentage: 70,
    isActive: false,
    experienceType: "relative",
    startDate: "06/2021",
  },
  python: {
    id: "python",
    techName: "Python",
    description:
      "A high-level programming language used for web development, data analysis, scientific computing, and more.",
    icon: PythonIcon,
    projectsCount: 4,
    skillLevelPercentage: 20,
    isActive: false,
    experienceType: "fixed",
    startDate: "05/2021",
    endDate: "08/2021",
  },
};

export const projects: IProjectDict = {
  cubekart: {
    id: "cubekart",
    title: "Cubekart",
    githubLink: "https://github.com/anudeep-m/Cubekart",
    projectLink: "https://cubekart.onrender.com/",
    image: CubekartImage,
    logo: CubekartLogo,
    gif: CubekartGif,
    description:
      "Cubekart is an online shopping platform that enables customers to purchase products through a web application. The platform offers various features such as adding items to a virtual cart, placing orders, and leaving reviews. Additionally, Cubekart features an admin management system, allowing administrators to add new products and manage orders.",
    techStack: ["reactjs", "nodejs", "expressjs", "mongodb"],
  },

  cubemusic: {
    id: "cube-music",
    title: "Cube Music",
    description:
      "Cube Music is an online music streaming platform designed for playing songs. It offers various features for managing personal playlists, liked songs, adding songs to a queue, and creating albums. Additionally, Cube Music has an admin management system that enables administrators to add new albums.",
    githubLink: "https://github.com/anudeep-m/Cube-music",
    projectLink: "https://cube-music.onrender.com/",
    image: CubeMusicImage,
    logo: CubeMusicLogo,
    gif: CubeMusicGif,
    techStack: ["reactjs", "nodejs", "expressjs", "mongodb"],
  },

  cubechat: {
    id: "cube-chat",
    title: "Cube Chat",
    description:
      "Cube Chat is a real-time chat platform that allows users to communicate with their friends. It offers various functionalities, such as discovering people on Cube Chat, connecting with friends, and engaging in real-time conversations.",
    githubLink: "https://github.com/anudeep-m/Cube-chat",
    projectLink: "https://cube-chat.onrender.com/",
    image: CubeChatImage,
    logo: CubeChatLogo,
    gif: CubeChatGif,
    techStack: ["reactjs", "nodejs", "expressjs", "mongodb", "websockets"],
  },
};

export const defaultProjectKey = "cubekart";

export const contactLinks: IContactLink[] = [
  {
    id: "phone",
    icon: PhoneIcon,
    link: "tel:+91-900-332-2159",
    label: "Phone",
    socialId: "+91-900-332-2159",
  },
  {
    id: "mail",
    icon: MailIcon,
    link: "mailto:anudeep.mp7@gmail.com",
    label: "Mail",
    socialId: "anudeep.mp7@gmail.com",
  },
  {
    id: "whatsapp",
    icon: WhatsAppIcon,
    link: "https://wa.me/919003322159",
    label: "WhatsApp",
    socialId: "+91-900-332-2159",
  },
];

export const socialLinks: ISocialLink[] = [
  {
    id: "github",
    icon: GitHubIcon,
    link: "https://github.com/anudeep-mp",
    label: "GitHub",
    socialId: "anudeep-mp",
  },
  {
    id: "linkedin",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/anudeep-m",
    label: "LinkedIn",
    socialId: "anudeep-m",
  },
  {
    id: "twitter",
    icon: TwitterIcon,
    link: "https://twitter.com/i__anudeep",
    label: "Twitter",
    socialId: "i__anudeep",
  },
  {
    id: "instagram",
    icon: InstagramIcon,
    link: "https://instagram.com/i_anudeep",
    label: "Instagram",
    socialId: "i_anudeep",
  },
];
