import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";

import certificate1 from "../assets/certifications/Certificate1.jpg"
import certificate2 from "../assets/certifications/Certificate2.jpg"

export const HERO_CONTENT = `I am a passionate MERN stack developer with a strong foundation in crafting modern, responsive, and scalable web applications. Proficient in front-end technologies like React, Vite, and Bootstrap, as well as back-end technologies like Node.js, Express, and MongoDB, I aim to create user-centric solutions that deliver exceptional experiences. Additionally, I have a keen interest in cloud technologies like AWS, enabling me to build and deploy robust applications. As a fresher, I am eager to apply my skills, learn continuously, and contribute to innovative projects that drive growth and efficiency.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Integration(Social Networking and ASP Platform for Startups)",
    image: project1,
    description:"Integration is a MERN-based social networking and ASP platform for startups, offering startup and user/business profiles. It features startup profile sharing, follow systems,updates from followed startups, a web community providing ASP services to startups.",
    technologies: [ "React","Bootstrap", "Node.js","Express", "MongoDB"],
  },
  {
    title: "ITInteract (Web Platform for IT Student and IT Industry Professional Interaction)",
    image: project2,
    description:
      "ITInteract is a MERN-based platform connecting IT students and professionals across domains. It offers forums, task sharing, and profile sharing, promoting cross-domain collaboration, mentorship, and career growth with real-time messaging and seamless access.",
    technologies: [ "React/Vite","Tailwindcss", "Node.js","Express", "MongoDB"],
  },
  {
    title: "IntegrationCS (Cloud Store Platform)",
    image: project3,
    description:
      "IntegrationCS is a MERN-based platform for cloud stores, enabling users to create and manage stores across four categories: Fashion, Food, Electronics, and Entertainment. Each store is tied to a specific city, pin code, and address, providing a seamless way to establish and locate local cloud-based businesses.",
    technologies: [ "React/Vite","Tailwindcss", "Node.js","Express", "MongoDB"],
  },
  
];


export const CERTIFICATE = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    image:certificate1,
    link:"https://www.udemy.com/certificate/UC-630aceeb-b63c-44e3-9265-91554a51695f/",
    platform: [ "Udemy"],
  },
  {
    title: "Introduction to Cloud Computing on AWS for Beginners [2025]",
    image: certificate2,
    link:
      "https://www.udemy.com/certificate/UC-d1172e92-aa9f-476a-b80c-b56ddd457277/",
    platform: [  "Udemy"],
  },
  
  
];

export const CONTACT = {
  address: "14 Parishram Om Nagar Vasai West",
  phoneNo: "+91 7709740024",
  email: "adityasalkar18@gmail.com",
};
