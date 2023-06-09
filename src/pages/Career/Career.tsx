import OneBancLogo from "../../assets/images/onebanc-logo.png";
import SpcLogo from "../../assets/images/spc-logo.png";
import VitLogo from "../../assets/images/vit-logo.png";

import "./career.css";

export default function Career() {
  const carrerData = [
    {
      id: 1,
      orgLogo: VitLogo,
      orgName: "Vellore Institute of Technology",
      orgPosition: "Bachelor of Technology",
      orgTenure: "July 2017 - June 2021",
      orgLink: "https://vit.ac.in",
    },
    {
      id: 2,
      orgLogo: OneBancLogo,
      orgName: "OneBanc Technologies",
      orgPosition: "Associate Frontend Developer",
      orgTenure: "Oct 2021 - Feb 2022",
      orgLink: "https://onebanc.ai",
    },
    {
      id: 3,
      orgLogo: OneBancLogo,
      orgName: "OneBanc Technologies",
      orgPosition: "Frontend Developer",
      orgTenure: "Feb 2022 - June 2022",
      orgLink: "https://onebanc.ai",
    },
    {
      id: 4,
      orgLogo: SpcLogo,
      orgName: "SkyPoint Cloud",
      orgPosition: "Software Development Engineer - I",
      orgTenure: "June 2022 - Present",
      orgLink: "https://skypointcloud.com",
    },
  ];

  return (
    <div className="section career">
      <div className="title">Career</div>
      <div className="content">
        <ul className="step-progress">
          {carrerData.reverse().map((item) => {
            return (
              <li key={item.id} className="step-progress-item">
                <div className="step-progress-item-content">
                  <img src={item.orgLogo} className="org-logo" />
                  <div>
                    <div className="org-position">{item.orgPosition}</div>
                    <a href={item.orgLink} target="_blank" className="org-name">
                      {item.orgName}
                    </a>
                    <div className="org-tenure">{item.orgTenure}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
