import "./intro.css";

import IntroImg from "../../assets/images/intro.png";

export default function Intro() {
  return (
    <div className="section intro">
      <div className="intro-text">
        <div className="outline" />
        <div className="heading-hi">hey! I'm</div>
        <div className="heading-name">Anudeep</div>
        <div className="heading-desc">a web dev, building value by design</div>
        <div className="outline" />
      </div>
      <div className="intro-image-container">
        <img src={IntroImg} className="intro-img" />
      </div>
    </div>
  );
}
