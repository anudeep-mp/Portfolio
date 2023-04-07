import { RefObject } from "react";

export interface IPageRefs {
  introRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  careerRef: RefObject<HTMLElement>;
  careerHZRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

export interface ICareerItem {
  id: number;
  orgLogo: string;
  orgBGLogo: string;
  orgName: string;
  orgPosition: string;
  orgTenure: string;
  orgLink: string;
  location: string;
}

export interface ISkillsDict {
  [key: string]: ISkill;
}

export type ExperienceType = "relative" | "fixed";

export type ISkill = IRelativeSkill | IFixedSkill;
export interface IRelativeSkill {
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

export interface IFixedSkill {
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

export interface IProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
  githubLink: string;
  image: string;
  logo: string;
  gif: string;
}

export interface IProjectDict {
  [key: string]: IProject;
}