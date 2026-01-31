import netmagic from "../assets/netmagic.png";
import fintrack from "../assets/fintrack.png";
import knaqk from "../assets/knaqk.png";

const projects = [
  {
    title: "FINTRACK- Income & Expense Tracker (MERN)",
    description:
      "A full-stack income and expense tracker with JWT authentication, role-based APIs, analytics, and CSV export. Deployed using MongoDB Atlas, Vercel, and Render.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/satharkp/expense-frontend",
    live: "https://expense-frontend-five-rouge.vercel.app",
    img: fintrack,
  },

  {
    title: "NetMagic – Freelance Web App",
    description:
      "A responsive React web application developed for a real client, focusing on clean UI and usability.",
    tech: ["React.js", "CSS"],
    github: "https://github.com/satharkp",
    live: "https://newpro-indol.vercel.app",
    img: netmagic,
  },
{
  title: "KNAQK – Web Application",
  description:
    "KNAQK is a responsive React-based web application built for a real client, emphasizing a modern user interface, smooth user experience, and performance-focused design.",
  tech: ["React.js", "CSS"],
  github: "https://github.com/satharkp",
  live: "https://knaqk.vercel.app/",
  img: knaqk,
},

];

export default projects;