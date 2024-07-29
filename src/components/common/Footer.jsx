import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import {
  FaFacebook,
  FaGoogle,
  FaYoutube,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import "../../App.css";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = [
  { name: "Forums", link: "forums" },
  { name: "Chapters", link: "chapters" },
  { name: "Events", link: "events" },
  {
    name: "Contribute",
    link: "https://github.com/Muskansahuincredible/StudyNotion-An-Online-Education-Platform",
    external: true,
  },
];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-left">
            <div className="footer-company">
              <img src={Logo} alt="" className="footer-logo" />
              <h1 className="footer-heading">Company</h1>
              <div className="footer-links">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <div key={i} className="footer-link">
                    <Link to={`/${ele.toLowerCase()}`}>{ele}</Link>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 text-lg">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300"
                >
                  <FaFacebook className="facebook" />
                </a>
                <a
                  href="https://projects.100xdevs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300"
                >
                  <FaGoogle className="google" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300"
                >
                  <FaXTwitter className="twitter" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300"
                >
                  <FaYoutube className="youtube" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300"
                >
                  <FaLinkedin className="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon transition duration-300"
                >
                  <FaInstagram className="instagram" />
                </a>
              </div>
              <div className="container" style={{ display: "block" }}>
                <h4
                  className="email"
                  style={{ marginLeft: "-7rem", marginBottom: "0.5rem" }}
                >
                  Email Us
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "30rem",
                    marginBottom: "28px",
                  }}
                >
                  <div className="footer-social">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaFacebook className="facebook" />
                    </a>
                    <a
                      href="https://projects.100xdevs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaGoogle className="" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaXTwitter className="twitter" />
                    </a>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaYoutube className="youtube" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedin className="linkedin" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaInstagram className="instagram" />
                    </a>
                  </div>
                  <div className="footer-email">
                    <h4>Email Us</h4>
                    <div className="email-input">
                      <input
                        type="text"
                        id="message-input"
                        placeholder="Type your message here"
                        style={{
                          padding: "3px",
                          marginLeft: "-30rem",
                          borderRadius: "5px",
                          width: "8.5rem",
                          fontSize: "0.8rem",
                          borderColor: "yellow",
                          borderWidth: "3px",
                        }}
                        text-size="2"
                      />
                      <a href="mailto:abc@gmail.com">
                        <SendIcon className="send-icon" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-[40%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    Resources
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="footer-resources">
                      <h1 className="footer-heading">Resources</h1>
                      <div className="footer-links">
                        {Resources.map((ele, index) => (
                          <div key={index} className="footer-link">
                            <Link
                              to={`/${ele.split(" ").join("-").toLowerCase()}`}
                            >
                              {ele}
                            </Link>
                          </div>
                        ))}
                      </div>
                      <h1 className="footer-heading">Support</h1>
                      <div className="footer-link">
                        <Link to="/help-center">Help Center</Link>
                      </div>
                    </div>

                    <div className="footer-plans">
                      <h1 className="footer-heading">Plans</h1>
                      <div className="footer-links">
                        {Plans.map((ele, index) => (
                          <div key={index} className="footer-link">
                            <Link
                              to={`/${ele.split(" ").join("-").toLowerCase()}`}
                            >
                              {ele}
                            </Link>
                          </div>
                        ))}
                      </div>
                      <h1 className="footer-heading">Community</h1>
                      <div className="footer-links">
                        {Community.map((ele, index) => (
                          <div key={index} className="footer-link">
                            {ele.external ? (
                              <a
                                href={ele.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {ele.name}
                              </a>
                            ) : (
                              <Link to={ele.link}>{ele.name}</Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="footer-right">
                    {FooterLink2.map((ele, i) => (
                      <div key={i} className="footer-column">
                        <h1 className="footer-heading">{ele.title}</h1>
                        <div className="footer-links">
                          {ele.links.map((link, index) => (
                            <div key={index} className="footer-link">
                              <Link to={link.link}>{link.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-links">
          {BottomFooter.map((ele, i) => (
            <div key={i} className="bottom-link">
              <Link to={`/${ele.split(" ").join("-").toLocaleLowerCase()}`}>
                {ele}
              </Link>
            </div>
          ))}
        </div>
        <div className="copyright">
          Made with ❤️ © {new Date().getFullYear()} Studynotion
        </div>
      </div>
      <style>
        {`
          @media (max-width: 375px) {
            .email {
              margin-left: -2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
