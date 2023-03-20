import { RefObject, useState } from "react";

import { ImageBase64URLs } from "../../assets/ImageBase64URLs";
import Logo from "../../assets/images/logo.png";
import { IPageRefs } from "../../common/interfaces";
import "./navbar.css";

interface INavBarProps {
  refs: IPageRefs;
}

export default function NavBar(props: INavBarProps) {
  const { introRef, aboutRef, careerRef, skillsRef, projectsRef, contactRef } =
    props.refs;

  const [isNavLinksDropdownOpen, setIsNavLinksDropdownOpen] =
    useState<boolean>(false);

  const handleScroll = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const toggleNavlinksDropdown = () => {
    setIsNavLinksDropdownOpen(!isNavLinksDropdownOpen);
  };

  return (
    <div className="navbar">
      <img
        className="logo-img"
        src={Logo}
        alt="anufolio"
        onClick={() => handleScroll(introRef)}
      />
      <div
        className={
          isNavLinksDropdownOpen
            ? "nav-links-collapsable-container active"
            : "nav-links-collapsable-container"
        }
      >
        <div className="toggle-buttons-container">
          <img
            className="toggle-open-img"
            onClick={toggleNavlinksDropdown}
            src={ImageBase64URLs.toggleOpen}
          />
          <img
            onClick={toggleNavlinksDropdown}
            className="toggle-close-img"
            src={ImageBase64URLs.toggleClose}
          />
        </div>
        <ul className="links">
          <li className="link" onClick={() => handleScroll(aboutRef)}>
            About
          </li>
          <li className="link" onClick={() => handleScroll(careerRef)}>
            Career
          </li>
          <li className="link" onClick={() => handleScroll(skillsRef)}>
            Skills
          </li>
          <li className="link" onClick={() => handleScroll(projectsRef)}>
            Projects
          </li>
          <li className="link" onClick={() => handleScroll(contactRef)}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
