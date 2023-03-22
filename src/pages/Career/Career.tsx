import OneBancLogo from "../../assets/images/onebanc-logo.webp";
import SpcLogo from "../../assets/images/spc-logo.png";
import VitLogo from "../../assets/images/vit-logo.png";

import "./career.css";

export default function Career() {
  return (
    <div className="section career">
      <div className="title">Career</div>
      <div className="content">
        <ul className="step-progress">
          <li className="step-progress-item">
            <div className="step-progress-item-content">
              <img src={SpcLogo} className="org-logo" />
              <div>
                <div className="org-position">
                  Software Development Engineer - I
                </div>
                <a
                  href="https://skypointcloud.com"
                  target="_blank"
                  className="org-name"
                >
                  SkyPoint Cloud
                </a>
                <div className="org-tenure">June 2022 - Present</div>
              </div>
            </div>
          </li>
          <li className="step-progress-item">
            <div className="step-progress-item-content">
              <img src={OneBancLogo} className="org-logo" />
              <div>
                <div className="org-position">Frontend Developer</div>
                <a
                  href="https://onebanc.ai"
                  target="_blank"
                  className="org-name"
                >
                  OneBanc Technologies
                </a>
                <div className="org-tenure">Feb 2022 - June 2022</div>
              </div>
            </div>
          </li>
          <li className="step-progress-item">
            <div className="step-progress-item-content">
              <img src={OneBancLogo} className="org-logo" />
              <div>
                <div className="org-position">Associate Frontend Developer</div>
                <a
                  href="https://onebanc.ai"
                  target="_blank"
                  className="org-name"
                >
                  OneBanc Technologies
                </a>
                <div className="org-tenure">Oct 2021 - Feb 2022</div>
              </div>
            </div>
          </li>
          <li className="step-progress-item">
            <div className="step-progress-item-content">
              <img src={VitLogo} className="org-logo vit" />
              <div>
                <div className="org-position">Bachelor of Technology</div>
                <a
                  href="https://vit.ac.in"
                  target="_blank"
                  className="org-name"
                >
                  Vellore Institute of Technology
                </a>
                <div className="org-tenure">July 2017 - June 2021</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
