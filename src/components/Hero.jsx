import profile from "../assets/profile.png";
import { ArrowRight, Download, Mail, Sparkles, Code, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-gray-50/50 dark:bg-gray-950">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-300/40 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] sm:blur-[128px] animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-300/40 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] sm:blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-300/30 dark:bg-pink-900/15 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] sm:blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-5 sm:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 max-w-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-wide text-blue-700 bg-blue-500/10 dark:text-blue-300 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse shrink-0"></span>
            <span className="truncate">MERN Developer & Freelancer</span>
          </div>

          <h1 className="text-[28px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 dark:from-blue-400 dark:via-indigo-300 dark:to-pink-400">
              Digital Experiences
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 px-1">
            Hi, I’m <span className="font-semibold text-gray-900 dark:text-white">Abdul Sathar</span>.
            A passionate developer crafting robust full-stack web applications, interactive 3D experiences, and high-conversion client websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-center md:justify-start w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm font-semibold text-gray-800 bg-white border border-gray-200/80 rounded-xl hover:bg-gray-50 dark:text-gray-200 dark:bg-gray-900/80 dark:border-gray-800 dark:hover:bg-gray-800 backdrop-blur-sm transition-all shadow-xs hover:shadow-sm"
            >
              <Mail className="mr-2 w-4 h-4 text-blue-600 dark:text-blue-400" />
              Contact Me
            </a>

            <a
              href="/Abdul_Sathar_KP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-3.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
            >
              <Download className="mr-2 w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Quick Highlight Chips */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
              <span>Full-Stack Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
              <span>Interactive 3D / Three.js</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
              <span>Client Freelance Solutions</span>
            </div>
          </div>
        </div>

        {/* Profile Image & Floating Cards */}
        <div className="relative flex justify-center animate-fade-in-up mt-4 md:mt-0" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-pink-500/30 rounded-3xl blur-2xl transform scale-105 sm:scale-110"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/60 dark:border-gray-800/80 shadow-2xl backdrop-blur-sm bg-white/20 dark:bg-black/20 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-pink-500/10 mix-blend-overlay z-10"></div>
              <img
                src={profile}
                alt="Abdul Sathar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge 1: Open to work */}
            <div
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Floating Badge 2: Featured Work */}
            <div
              className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 animate-float hidden sm:flex items-center gap-2.5"
              style={{ animationDelay: "2.5s" }}
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">7+ Featured Projects</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">React & MERN Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;