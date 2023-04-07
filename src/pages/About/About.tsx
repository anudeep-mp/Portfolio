import { RefObject } from "react";
import { handleScroll } from "../../common/utils/utilities";
import "./about.css";

export default function About({
  contactRef,
}: {
  contactRef: RefObject<HTMLElement>;
}) {
  return (
    <div className="section about">
      <div className="title">Me, Myself & I</div>
      <div className="container">
        <div className="content">
          I specialize in frontend development as a software developer stitching
          effective designs with data to create dynamic user experiences. I also
          enjoy coding as a hobby, allowing me to explore new technologies and
          push the boundaries of what's possible. When I'm not coding, you can
          usually find me playing badminton or watching cricket. Trying to be a
          better version of myself every day in this fast moving world.
          <br />
          <br />
          <div
            onClick={() => handleScroll(contactRef)}
            className="contact-link"
          >
            Let's make something special {":)"}
          </div>
        </div>
      </div>
    </div>
  );
}
