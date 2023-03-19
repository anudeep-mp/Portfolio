import { RefObject } from "react";

export interface IPageRefs {
  introRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  careerRef: RefObject<HTMLElement>;
  skillsRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}
