import OneBancLogo from "../../assets/images/onebanc-logo.png";
import SpcLogo from "../../assets/images/spc-logo.png";
import VitLogo from "../../assets/images/vit-logo.png";
import VitBGLogo from "../../assets/images/vit-logo-bg.png";
import OneBancBGLogo from "../../assets/images/onebanc-logo.png";
import SpcBGLogo from "../../assets/images/spc-logo.png";
import PositionImage from "../../assets/images/position.png";
import LocationImage from "../../assets/images/location.png";
import OrganisationImage from "../../assets/images/organisation.png";
import TenureImage from "../../assets/images/tenure.png";

import "./careerhz.css";

export default function CareerHZ() {
  const carrerData = [
    {
      id: 1,
      orgLogo: VitLogo,
      orgBGLogo: VitBGLogo,
      orgName: "Vellore Institute of Technology",
      orgPosition: "Bachelor of Technology",
      orgTenure: "July 2017 - June 2021",
      orgLink: "https://vit.ac.in",
      location: "Vellore, Tamil Nadu",
    },
    {
      id: 2,
      orgLogo: OneBancLogo,
      orgBGLogo: OneBancBGLogo,
      orgName: "OneBanc Technologies",
      orgPosition: "Associate Frontend Developer",
      orgTenure: "Oct 2021 - Feb 2022",
      orgLink: "https://onebanc.ai",
      location: "Gurgaon, Haryana",
    },
    {
      id: 3,
      orgLogo: OneBancLogo,
      orgBGLogo: OneBancBGLogo,
      orgName: "OneBanc Technologies",
      orgPosition: "Frontend Developer",
      orgTenure: "Feb 2022 - June 2022",
      orgLink: "https://onebanc.ai",
      location: "Gurgaon, Haryana",
    },
    {
      id: 4,
      orgLogo: SpcLogo,
      orgBGLogo: SpcBGLogo,
      orgName: "SkyPoint Cloud",
      orgPosition: "Software Development Engineer - I",
      orgTenure: "June 2022 - Present",
      orgLink: "https://skypointcloud.com",
      location: "Bangalore, Karnataka",
    },
  ];

  return (
    <div className="section careerhz">
      <div className="title">Career</div>
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <ul className="step-progress">
              {carrerData.reverse().map((item) => {
                return (
                  <li key={item.id} className="step-progress-item">
                    <div className="step-progress-item-content">
                      <div
                        className="background-image-container"
                        style={{ backgroundImage: `url(${item.orgBGLogo})` }}
                      />
                      <img src={item.orgLogo} className="org-detail org-logo" />
                      <div>
                        <div className="org-detail org-position">
                          <img
                            src={PositionImage}
                            className="org-position-image"
                          />
                          {item.orgPosition}
                        </div>
                        <a
                          href={item.orgLink} 
                          target="_blank"
                          rel="noreferrer"
                          className="org-detail org-name"
                        >
                          <img
                            src={OrganisationImage}
                            className="org-position-image"
                          />
                          {item.orgName}
                        </a>
                        <div className="org-detail org-location">
                          <img
                            src={LocationImage}
                            className="org-position-image"
                          />
                          {item.location}
                        </div>
                        <div className="org-detail org-tenure">
                          <img
                            src={TenureImage}
                            className="org-position-image"
                          />
                          {item.orgTenure}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
