import { useRef } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import About from "./pages/About/About";
import Career from "./pages/Intro/Career";
import Contact from "./pages/Contact/Contact";
import Intro from "./pages/Intro/Intro";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import { IPageRefs } from "./common/interfaces";

function App() {
  const refs: IPageRefs = {
    introRef: useRef<HTMLElement>(null),
    aboutRef: useRef<HTMLElement>(null),
    careerRef: useRef<HTMLElement>(null),
    skillsRef: useRef<HTMLElement>(null),
    projectsRef: useRef<HTMLElement>(null),
    contactRef: useRef<HTMLElement>(null),
  };

  return (
    <div className="App">
      <NavBar refs={refs} />
      <section ref={refs.introRef}>
        <Intro />
      </section>
      <section ref={refs.aboutRef}>
        <About />
      </section>
      <section ref={refs.careerRef}>
        <Career />
      </section>
      <section ref={refs.skillsRef}>
        <Skills />
      </section>
      <section ref={refs.projectsRef}>
        <Projects />
      </section>
      <section ref={refs.contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
