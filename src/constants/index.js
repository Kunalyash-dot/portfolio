import project1 from "../assets/ecom.png";
import project2 from "../assets/estate.png";
import project3 from "../assets/project4.png";
import project4 from "../assets/project3.jpg";
import udemyCertifcate from "../assets/udemy.jpg";
import pythonCertifcate from "../assets/python.jpg";

export const HERO_CONTENT = `A Full Stack Developer passionate about building dynamic and user-friendly web applications. With  expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and Python, backed by certifications from Udemy and Besant Technologies, I create solutions that blend seamless functionality with engaging user experiences. Let's turn ideas into reality—explore my projects and get in touch!`;

export const ABOUT_TEXT = `I am a Full Stack Developer passionate about building dynamic, user-friendly web applications. My tech journey started with a curiosity for problem-solving, leading me to master the MERN stack (MongoDB, Express.js, React, Node.js) through Dr. Angela Yu's Udemy course and Python with MySQL at Besant Technologies, Tambaram. With 3 years as an MIS Executive at Dvara E-Dairy, I developed expertise in data analysis, Excel automation, and reporting, which enhances my ability to create robust solutions.

I thrive on turning ideas into reality, crafting seamless frontends with React and scalable backends with Node.js and databases. Driven by a love for learning and tackling challenges, I'm excited to collaborate on innovative projects. Outside coding, I enjoy exploring new technologies and staying active through outdoor adventures. Let's create something amazing together!`;



export const CERTIFICATES = [
  {
    title:"Full Stack Web Development Certificate",
    image:udemyCertifcate,
    description:"Completed Dr. Angela Yu's comprehensive Udemy course, mastering the MERN stack (MongoDB, Express.js, React, Node.js). Gained hands-on experience building dynamic, scalable web applications, including RESTful APIs, frontend UIs, and database integration.",
    skills:["HTML", "CSS","Javascript", "React", "Node.js", "MongoDB","Git","PostgreSQL"]
  },
  {
    title:"Python Programming Certificate",
    image:pythonCertifcate,
    description:"Earned through an intensive offline course at Besant Technologies, Tambaram, under expert guidance. Mastered Python fundamentals, including data structures, file handling, automation, and MySQL integration, enabling the development of efficient scripts and data-driven applications.",
    skills:["Python", "MySQL", "Automation", "Data Processing"]
  }
]

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, user authentication and Razorpay payments.",
    technologies: [ "React","Tailwind.css", "Express.js", "MongoDB","Redux-redux","Cloudinary"],
    git:"https://github.com/Kunalyash-dot/fresh-E-Commerce.git",
    live:"https://e-commerece-frontend.onrender.com/",
  },
  {
    title: "Modern Real Estate Web App",
    image: project2,
    description:
      "A full-stack real estate application with user authentication, allowing users to create, update, and delete their own property listings. Includes secure login/logout and role-based listing control.",
    technologies: [ "React","Tailwind.css", "Express.js", "MongoDB","Redux-redux","Firebase"],
    git:"https://github.com/Kunalyash-dot/Real_Estate_MERN.git",
    live:"https://real-estate-mern-gekr.onrender.com/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Tailwind.css","Framer-motion"],
    git:"",
    live:"",
  },
  {
    title: "Collection Dashboard",
    image: project4,
    description:
      "A role-based collection dashboard with admin CRUD access and user-level data visibility by hierarchy.",
    technologies: ["React","Tailwind.css", "Express.js", "MongoDB","Redux-redux"],
    git:"https://github.com/Kunalyash-dot/collection_dashboard_new.git",
    live:"  ",
    
  },
];

