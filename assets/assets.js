import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import db_icon from "./DB-ICON.png";
import testing_icon from "./testing-icon.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import intelijidea from "./intelijidea.png";
import mysql from "./mysql.png";
import powerbi from "./powerbi.png";
import vmware from "./vmware.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import qa_icon from "./qa-icon.png";
import pm_icon from "./pm-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  db_icon,
  testing_icon,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  intelijidea,
  mysql,
  powerbi,
  vmware,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  qa_icon,
  pm_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
  title: "Portfolio Website",
  description: "Web Design & Development",
  bgImage: "/work-1.png",
  tech: ["React", "Tailwind", "Next.js", "Figma"],
  role: "Frontend Developer | UI/UX Designer | QA Tester",
  github: "https://github.com/yourrepo",
  live: "https://yourliveurl.com",
  images: ["/work-1a.png", "/work-1b.png"],
  fullDescription:[
    "Designed and developed a personal portfolio website using React, Tailwind CSS, and Next.js.", 
    "Created wireframes and high-fidelity UI prototypes in Figma, focusing on user experience and accessibility.", "Integrated smooth animations and responsive design.", 
    "Conducted thorough functional testing across browsers and devices to ensure performance and reliability.", 
    "Managed the entire workflow independently, from planning to deployment."
],
  behance: "https://www.behance.net/yourcase-study",

},
  {
    title: "Food Delivery App",
    description: "Full Stack",
    bgImage: "/work-2.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Figma"],
    github: "https://github.com/Roshni20001102/Food_Delivery",
    live: "https://yourliveurl.com",
    images: ["/work-2a.png", "/work-2b.png"],
    fullDescription: [
      "Developed a responsive full-stack food delivery platform.",
      "Designed intuitive UI/UX using Figma for seamless user flow.",
      "Built RESTful APIs for order, menu, admin and user management with Node.js and Express.",
      "Integrated MongoDB for dynamic data handling and scalability.",
      "Performed manual and regression testing to ensure a smooth checkout experience.",
      "Validated cross-browser compatibility for consistent performance.",
    ],
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.qa_icon,
    title: "Quality Assurance",
    description:
      "Testing for functionality, usability, and bugs to ensure reliable performance...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.pm_icon,
    title: "Project Coordination",
    description:
      "Efficient planning and task management to keep development on track.",
    link: "",
  },

  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Frontend",
    description: "HTML, CSS, React Js, Next Js, Bootstrap",
  },
  {
    icon: assets.db_icon,
    iconDark: assets.code_icon_dark,
    title: "Programming",
    description: "JavaScript, Java, Python, SQL",
  },
  {
    icon: assets.testing_icon,
    iconDark: assets.code_icon_dark,
    title: "Testing",
    description: "Selenium , Postman, JUnit",
  },

  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "BSc (Hons) in Information Technology",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
  assets.intelijidea,
  assets.mysql,
  assets.vmware,
  assets.powerbi,
];
