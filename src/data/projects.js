import netmagic from "../assets/netmagic.png";
import fintrack from "../assets/fintrack.png";
import knaqk from "../assets/knaqk.png";
import qrOrdering from "../assets/qr-ordering.png";
import pallet from "../assets/pallet.png";
import luxedent from "../assets/luxedent.png";
import luxhospital from "../assets/luxhospital.png";

const projects = [
  {
    title: "WoodNest – 3D Pallet Furniture",
    badge: "3D Interactive",
    description:
      "An interactive 3D web application built with Three.js and React. Features dynamic 3D model visualization with scroll-driven assembly animations to showcase eco-conscious reclaimed pallet furniture.",
    tech: ["React.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/satharkp/Pallet",
    live: "https://pallet-gamma.vercel.app/",
    img: pallet,
  },
  {
    title: "QR Ordering System",
    badge: "Full Stack",
    description:
      "A full-stack restaurant management platform with a QR-based customer ordering interface, real-time socket notifications, Kitchen Page order tracking, and a Cashier dashboard.",
    tech: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/satharkp/qr-menu-frontend",
    live: "https://qr-menu-frontend-eta.vercel.app/",
    img: qrOrdering,
  },
  {
    title: "FINTRACK – Income & Expense Tracker (MERN)",
    badge: "MERN Stack",
    description:
      "A full-stack income and expense tracker with JWT authentication, role-based APIs, analytics, and CSV export. Deployed using MongoDB Atlas, Vercel, and Render.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/satharkp/expense-frontend",
    live: "https://expense-frontend-five-rouge.vercel.app",
    img: fintrack,
  },
  {
    title: "LuxeDent – Premium Dental Clinic",
    badge: "Client Work",
    description:
      "A modern healthcare frontend web application developed as freelance client work. Built with clean editorial typography, treatment catalogs, doctor profiles, and appointment consultation booking.",
    tech: ["React.js", "Tailwind CSS", "Freelance (Frontend)"],
    github: "https://github.com/satharkp/dental5",
    live: "https://dental5-psjj.vercel.app/",
    img: luxedent,
  },
  {
    title: "LuxHospital – Healthcare Platform",
    badge: "Client Work",
    description:
      "A premium hospital and medical clinic frontend web application developed for freelance client work, featuring department overviews, doctor directory, patient resources, and interactive appointment booking.",
    tech: ["React.js", "Tailwind CSS", "Freelance (Frontend)"],
    github: "https://github.com/satharkp/dental4",
    live: "https://dental4-seven.vercel.app/",
    img: luxhospital,
  },
  {
    title: "NetMagic – Freelance Web App",
    badge: "Client Work",
    description:
      "A responsive React web application developed for a real client, focusing on clean UI and usability.",
    tech: ["React.js", "CSS"],
    github: "https://github.com/satharkp/Newpro",
    live: "https://newpro-indol.vercel.app",
    img: netmagic,
  },
  {
    title: "KNAQK – Web Application",
    badge: "Client Work",
    description:
      "KNAQK is a responsive React-based web application built for a real client, emphasizing a modern user interface, smooth user experience, and performance-focused design.",
    tech: ["React.js", "CSS"],
    github: "https://github.com/satharkp/Knaqk",
    live: "https://knaqk.vercel.app/",
    img: knaqk,
  },
];

export default projects;