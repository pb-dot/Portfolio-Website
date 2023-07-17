import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "ML Enthusiast",
    icon: backend,
  },
  {
    title: "IT support specialist",
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
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Graph compression framework design ",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Doing a research internship under Dr. Apurba Sarkar, IIEST shibpur on designing graph compression framework.",
      "The research is currently on the primary development stage focusing on literature review and implementations."
    ],
  },
  {
    title: "Subject Matter Expert",
    company_name: "House of Couton Private Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "During my internship in Machine Learning, I assumed the role of a Subject Matter Expert, leveraging my expertise to contribute valuable insights and guidance. ",
      "This opportunity allowed me to actively participate in the exploration and application of advanced ML techniques, enhancing my practical knowledge in this domain.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jee Mains 98.5 %ile",
    name: "",
    designation: "",
    company: "",
  },
  {
    testimonial:
      "100 in Phy-Comp-Math in ISC | school topper in both ISC and ICSE",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "offered SHE scholarship under INSPIRE program of government of India",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Gaming G-Zard",
    description:
      "Web-based platform that allows Esports registration and promotion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SPA",
        color: "green-text-gradient",
      },
      {
        name: "CSR",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/pb-dot/G-zard",
  },
  {
    name: "One Stop Shop",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "CRUD",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/pb-dot/E-commerce-MERN",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
