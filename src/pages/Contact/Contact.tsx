import { useState } from "react";
import { contactLinks, socialLinks } from "../../assets/data/data";
import "./contact.css";

enum sendStauts {
  INACTIVE = "INACTIVE",
  TRIGGERED = "TRIGGERED",
  SENT = "SENT",
  FAILED = "FAILED",
}

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageSendingStatus, setMessageSendingStatus] = useState<sendStauts>(
    sendStauts.INACTIVE
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageSendingStatus(sendStauts.TRIGGERED);
    setMessageSendingStatus(sendStauts.FAILED);
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setMessageSendingStatus(sendStauts.FAILED);
    }, 2000);
  };

  const renderFormLabel = (label: string) => {
    return label.split("").map((letter, index) => {
      return (
        <span
          className="form-label-letter"
          style={{ transitionDelay: `${index * 50}ms` }}
          key={letter + index + letter}
        >
          {letter}
        </span>
      );
    });
  };

  return (
    <div className="section contact">
      <div className="title">Lets Talk!</div>
      <div className="content">
        <div className="wrapper">
          <div className="platform-links">
            <div className="contact-links">
              <div className="box-title">Contact me on</div>
              <div className="platforms">
                {contactLinks.map((item) => {
                  return (
                    <a
                      href={item.link}
                      key={item.id}
                      className="contact-link"
                      target="_blank"
                    >
                      <img src={item.icon} />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="contact-links">
              <div className="box-title">Follow me on</div>
              <div className="platforms">
                {socialLinks.map((item) => {
                  return (
                    <a
                      href={item.link}
                      key={item.id}
                      className="social-link"
                      target="_blank"
                    >
                      <img src={item.icon} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-form-rail first-rail">
              <div className="input-field">
                <input
                  name="nm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label className="form-label">{renderFormLabel("Name")}</label>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="form-label">{renderFormLabel("Email")}</label>
              </div>
            </div>
            <div className="input-form-rail second-rail">
              <div className="input-field">
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <label className="form-label">
                  {renderFormLabel("Subject")}
                </label>
              </div>
            </div>
            <div className="input-form-rail third-rail">
              <div className="input-field">
                <textarea
                  name="message"
                  rows={2}
                  style={{ resize: "none" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <label className="form-label">
                  {renderFormLabel("Message")}
                </label>
              </div>
            </div>
            <div className="input-form-rail fourth-rail">
              <div>
                {messageSendingStatus === sendStauts.TRIGGERED
                  ? "Sending"
                  : messageSendingStatus === sendStauts.SENT
                  ? "Sent"
                  : messageSendingStatus === sendStauts.FAILED
                  ? "Failed"
                  : ""}
              </div>
              <input
                className="submit-button"
                type="submit"
                value={"Send Message"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
