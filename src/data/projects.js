import netmagic from "../assets/netmagic.png";
import fintrack from "../assets/fintrack.png";

const projects = [
  {
    title: "Income & Expense Tracker (MERN)",
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
];

export default projects;