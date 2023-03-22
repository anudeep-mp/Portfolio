import { IPageRefs } from "../../common/interfaces";
import Logo from "../../assets/images/logo.png";
import "./sidenav.css";
import Divider from "../Divider";
import { handleScroll } from "../../common/utils/utilities";

interface INavBarProps {
  refs: IPageRefs;
}

export default function SideNav(props: INavBarProps) {
  const { introRef, aboutRef, careerRef, skillsRef, projectsRef, contactRef } =
    props.refs;

  return (
    <div className="side-nav">
      <img
        className="logo-img"
        src={Logo}
        alt="anufolio"
        onClick={() => handleScroll(introRef)}
      />
      <div className="nav-links">
        <div className="side-nav-item" onClick={() => handleScroll(introRef)}>
          Home
        </div>
        <Divider />
        <div className="side-nav-item" onClick={() => handleScroll(aboutRef)}>
          About
        </div>
        <Divider />
        <div className="side-nav-item" onClick={() => handleScroll(careerRef)}>
          Career
        </div>
        <Divider />
        <div className="side-nav-item" onClick={() => handleScroll(skillsRef)}>
          Skills
        </div>
        <Divider />
        <div
          className="side-nav-item"
          onClick={() => handleScroll(projectsRef)}
        >
          Projects
        </div>
        <Divider />
        <div className="side-nav-item" onClick={() => handleScroll(contactRef)}>
          Contact
        </div>
      </div>
    </div>
  );
}
