import { RefObject } from "react";
import { handleScroll } from "../../common/utils/utilities";
import "./about.css";

export default function About({contactRef} : {contactRef: RefObject<HTMLElement>}) {
  return (
    <div className="section about">
      <div className="title">Me, Myself & I</div>
      <div className="container">
        <div className="content">
          I'm a software developer interested in frontend spectrum. I stitch
          effective designs with data to create dynamic user experiences.
          Despite starting out as a mechanical engineer, I quickly realized that
          my true calling lay in the realm of software engineering. Fueled by a
          genuine passion for coding and a desire to constantly improve my
          skills, I have immersed myself in this field with utmost dedication.
          <br />
          <br />
          <div onClick={() => handleScroll(contactRef)} className="contact-link">Let's make something special {":)"}</div>
        </div>
      </div>
    </div>
  );
}
