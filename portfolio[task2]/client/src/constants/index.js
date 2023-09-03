import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  nptel,
  typescript,
  html,
  css,
  reactjs,
  ibm,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  sih,
  tripguide,
  next,
  astro,
  college,
  kali,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ethical Hacker",
    icon: mobile,
  },
  {
    title: "Cyber Security Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Kali Linux",
    icon: kali,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Astro JS",
    icon: astro,
  },
];

const experiences = [
  {
    title: "Bachelor's in Computer Applications",
    company_name: "Indraprastha University",
    icon: college,
    iconBg: "#383E56",
    date: "August 2021 - Present",
    points: [
      "Bachelors Student at Maharaja Surajmal Institute of Indraprastha University, Delhi. ",
      "Studying core programming and professional skill. ",
    ],
  },
  {
    title: "Ethical Hacking Course",
    company_name: "NPTEL / Swayam",
    icon: nptel,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2022",
    points: [
      "Learning advanced networking and operating system fundamentals.",
      "Learning and practicing data enumeration tactics and scans.",
      "Implementing web app, network and mobile security attacks.",
      "Used multiple kali linux hacking tools.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Smart India Hackathon",
    icon: sih,
    iconBg: "#383E56",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Lead a developers team in nation wide hackathon and secured 2nd rank nationwide.",
      "Evaluated the real world problem, found and implemented innovative software solution to it.",
      "Created a secure, multi-level web application for Government of Maharashtra",
    ],
  },
  {
    title: "Internship Trainee",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - May 2021",
    points: [
      "Did an 11 Month long training program with IBM.",
      "Studied multiple IT topics like Cloud Computing, Cyber Security.",
      "Other topics include : Data Visualization, Rapid Development with IBM Watson",
      "Gained multiple certificates and digital badges along with a project using IBM watson.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Socialize",
    description:
      "Web-based social media platform that allows users to post, like, comment, save and filter out posts (both images and videos).",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lakshyarawat1/socialize",
  },
  {
    name: "Authentication App",
    description:
      "A reusable authetication application using firebase auth providers for secure and fast authentication.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather App",
    description:
      "A web application using a weather API to display visualized weather data and multiple filters for location, time and weeks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/lakshyarawat1/textopia",
  },
];

export { services, technologies, experiences, testimonials, projects, navLinks };
