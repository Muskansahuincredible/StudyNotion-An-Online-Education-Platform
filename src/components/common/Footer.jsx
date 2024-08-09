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
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto py-14">
        <div className="w-full flex flex-col lg:flex-row pb-5 border-b border-richblack-700">
          <div className="w-full lg:w-[50%] flex flex-wrap lg:flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-full lg:w-[30%] mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain" />
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-4">Company</h1>
              <div className="flex flex-col gap-2 mt-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <div
                    key={i}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.toLowerCase()}`}>{ele}</Link>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-4 text-lg">
                {[
                  { icon: <FaFacebook />, link: "https://www.facebook.com" },
                  { icon: <FaGoogle />, link: "https://projects.100xdevs.com" },
                  { icon: <FaXTwitter />, link: "https://www.twitter.com" },
                  { icon: <FaYoutube />, link: "https://www.youtube.com" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
                  { icon: <FaInstagram />, link: "https://www.instagram.com" },
                ].map(({ icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon transition duration-300 hover:opacity-75 hover:bg-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <div className="container mt-4">
                <h4 className="text-richblack-50" style={{ marginBottom: "0.1rem" }}>Email Us</h4>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="message-input"
                    placeholder="Type your message here"
                    className="border-2 border-yellow-500 rounded px-2 py-1 w-40"
                  />
                  <a href="mailto:abc@gmail.com" className="flex items-center ml-2">
                    <SendIcon className="text-yellow-500" style={{ fontSize: "26px", cursor: "pointer" }} />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Resources</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.split(" ").join("-").toLowerCase()}`}>{ele}</Link>
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">Support</h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to="/help-center">Help Center</Link>
              </div>
            </div>

            <div className="w-full lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">Plans</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.split(" ").join("-").toLowerCase()}`}>{ele}</Link>
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">Community</h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    {ele.external ? (
                      <a href={ele.link} target="_blank" rel="noopener noreferrer">
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

          <div className="w-full lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => (
              <div key={i} className="w-full lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">{ele.title}</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {ele.links.map((link, index) => (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row flex-wrap">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                } px-3`}
              >
                <Link to={`/${ele.split(" ").join("-").toLocaleLowerCase()}`}>
                  {ele}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 lg:mt-0">
            Made with ❤️ © {new Date().getFullYear()} Studynotion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
